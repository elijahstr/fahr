const bcrypt = require('bcryptjs');

module.exports = {
    login: async(req, res) => {
        const {email, password} = req.body,
            db = req.app.get('db');

            const foundUser = await db.check_user({email});
            if(!foundUser[0]){
                return res.status(400).send('User does not exist')
            }

            const auth = bcrypt.compareSync(password, foundUser[0].password);
            if(!auth){
                return res.status(401).send('Incorrect password')
            }
            delete foundUser[0].password;
            req.session.user = foundUser[0];
            res.status(202).send(req.session.user);
    },

    newAdmin: async(req, res) => {
        const {email, password} = req.body,
            db = req.app.get('db');

            const foundUser = await db.check_user({email});
            if(foundUser[0]){
                return res.status(400).send('Email taken')
            }

            let salt = bcrypt.genSaltSync(10),
            hash = bcrypt.hashSync(password, salt);

            const newUser = await db.new_admin({email, hash});
            req.session.user = newUser[0];
            res.status(201).send(req.session.user);
    },

    logout: async(req, res) => {
        req.session.destroy();
    }


}