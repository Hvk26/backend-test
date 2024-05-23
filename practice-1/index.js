console.log("Code is working");

require('dotenv').config();
const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res)=>{
    res.send('<h1>Welcome to my server</h1>')
})

app.get('/hvk', (req, res)=>{
    res.send('<h2>Hii i am HVK</h2>')
})

app.listen(process.env.port);