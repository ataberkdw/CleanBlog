const express = require('express');
const ejs = require('ejs');

const app = express();
//Template Engine
app.set("view engine", "ejs");
//Middlewares
app.use(express.static('public'))


const blog = {
    id:1,
    titel:'Blog title',
    description:'Blog description'
}
app.get('/',(req,res)=>{
    res.render('index')
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
 
app.listen(3000)