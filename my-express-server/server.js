//jshint esversion:6
const express = require("express");
var app = express();

app.get('/', (req, res) => {
    res.send("<h1>Hello World</h1><br><a href='contact'>Contact Me</a><br><a href='about'>About Me</a>");
});

app.get('/contact', (req, res) => {
   res.send("Contact me from hell<br><a href='/'>Home</a>"); 
});

app.get('/about', (req, res) => {
    res.send("Give me $50000 and i'll tell you<br><a href='/'>Home</a>"); 
 });

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});

