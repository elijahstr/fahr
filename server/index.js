require('dotenv').config();
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const adminCtrl = require('./controllers/adminController');
const postCtrl = require('./controllers/postController');
const mailCtrl = require('./controllers/mailController');
const path = require('path');
const app = express();
app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000*60*60*24*365}
}));

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then((db)=>{
    app.set('db', db);
    console.log('database connected');
})
.catch(err => console.log(err));

//ENDPOINTS HERE:
app.post('/auth/login', adminCtrl.login);
app.post('/auth/register', adminCtrl.newAdmin);
app.post('/auth/logout', adminCtrl.logout);
app.get('/admin/list', adminCtrl.adminList);

app.get('/api/all', postCtrl.getAllPosts);
app.get('/api/post/:id', postCtrl.getPost);
app.put('/api/post/:id', postCtrl.editPost);
app.delete('/api/post/:id', postCtrl.deletePost);
app.post('/api/post', postCtrl.newPost);

app.get('/api/author', postCtrl.getAuthorNames);
app.post('/api/match', postCtrl.matchAuthorId);

app.post('/api/email', mailCtrl.email);

app.use(express.static(__dirname + './../build'));
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, './../build/index.html'))
});

app.listen(SERVER_PORT, () => console.log(`Server is running on ${SERVER_PORT}`));