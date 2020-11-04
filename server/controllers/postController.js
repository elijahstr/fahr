module.exports = {
    getAllPosts: (req, res) => {
        const db = req.app.get('db');
    
        db.get_all_posts()
        .then(posts => res.status(200).send(posts))
        .catch(err => res.status(500).send(err))
    },
    
    getPost: (req, res) => {
        const {id} = req.params,
        db = req.app.get('db');
    
        db.get_post(id)
        .then(post => res.status(200).send(post))
        .catch(err => res.status(500).send(err))
    },
    
    editPost: (req, res) => {
        const {id} = req.params,
        {post_title, content} = req.body,
        db = req.app.get('db');

        db.edit_post([id, post_title, content])
        .then(()=>res.sendStatus(200))
        .catch(err=>res.status(500).send(err));
    },

    deletePost: (req, res) => {
        const {id} = req.params,
        db = req.app.get('db');

        db.delete_post(id)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))

    },

    newPost: (req, res) => {
        const {author_id, content, post_title, post_date} = req.body,
        db = req.app.get('db');

        db.new_post([author_id, content, post_title, post_date])
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },

    getAuthorNames: (req, res) => {
        const db = req.app.get('db');

        db.get_all_author_names()
        .then(posts => res.status(200).send(posts))
        .catch(err => res.status(500).send(err))
    },

    matchAuthorId: (req, res) => {
        const {first_name, last_name} = req.body,
        db = req.app.get('db');

        db.match_author_id({first_name, last_name})
        .then(id => res.status(200).send(id))
        .catch(err => res.status(500).send(err))
    }
}