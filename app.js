const express = require('express');
const ejs = require('ejs');
const Post = require('./models/Post');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const postController = require('./controllers/postController');
const pageController = require('./controllers/pageController');
//connect db
mongoose.connect('mongodb://localhost/cleanblog-test-db');
//Template Engine
app.set("view engine", "ejs");
//Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(methodOverride('_method',{
    methods:['POST','GET']
}));
//pageController
app.get('/', postController.getAllPosts)
app.get('/about',pageController.getAboutPage);
app.get('/posts/edit/:id', pageController.getEditPage);
app.get('/add_post',pageController.getAddPage);
//postController
app.get('/post/:id',postController.getPost);
app.post('/posting', postController.createPost);
app.put('/post/:id',postController.updatePost);
app.delete('/posts/:id',postController.deletePost);

 
app.listen(3000)