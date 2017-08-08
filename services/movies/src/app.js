const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const allowCORSMiddleware = require('../../common/middleware/allowCORSMiddleware');

const app = express();

app.use(allowCORSMiddleware);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next();
});

module.exports = app;
