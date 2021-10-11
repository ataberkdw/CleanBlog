const express = require('express');
const ejs = require('ejs');
const Post = require('./models/Post');
const mongoose = require('mongoose');

const app = express();
//connect db
mongoose.connect('mongodb://localhost/cleanblog-test-db');
//Template Engine
app.set("view engine", "ejs");
//Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.get('/', async (req,res)=>{
    const posts = await Post.find({});
    res.render('index',{
        posts
    })
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/add_post',(req,res)=>{
    res.render('add_post')
})
app.get('/post',(req,res)=>{
    res.render('post')
})
app.post('/posting', async (req,res)=>{
    await Post.create(req.body)
    res.redirect('/')
})

 
app.listen(3000)