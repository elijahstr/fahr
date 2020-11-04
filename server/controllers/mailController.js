const nodemailer = require('nodemailer'),
    {EMAIL, PASSWORD} = process.env;

module.exports = {
    email: async(req, res) => {
        const {subject, emailBody} = req.body,
        db = req.app.get('db'),
        emailArray = []

        db.get_emails()
        .then(emails => emailArray = emails)
        .catch(err=> res.status(500).send(err))



        try{
            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                service: 'gmail',
                secure: false,
                requireTLS: true,
                auth:{
                    user: EMAIL,
                    pass: PASSWORD
                }
            });

            let info = await transporter.sendMail({
                from: `FAHR <${EMAIL}>`,
                to: emailArray,
                subject: subject,
                text: emailBody,
                html: `<div>${emailBody}</div>`
            }, (err, res) => {
                if(err){
                    console.log(err)
                } else {
                    res.status(200).send(info);
                }
            })
        } catch(err){
            res.status(500).send(err);
        }
    } 
}