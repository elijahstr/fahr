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

    }
}