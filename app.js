const express = require('express');

const app = express();

app.use( (res, req, next) => {
    console.log('I am the first middleware');
    next();
});

app.use((req, res, next) => {
    console.log('I am the second middleware');
    res.send('<h1>Assignment 2 - Express.js</h1>')
})

app.listen(3000);