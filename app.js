const express = require('express');

const app = express();

app.use('/',(res, req, next) => {
    console.log(req); // just to test the server
});

app.listen(3000);