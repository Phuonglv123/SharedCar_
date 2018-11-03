const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

// API
const users = require('./routes/api/users');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// body parser middleware application/json
app.use(bodyParser.json());


// mongoDB config
const db = require('./database').mongoURL;
// mongoDB connect
mongoose.connect(db)
    .then(() => console.log(" ----- MongoDB starting..."))
    .catch(err => console.log(err));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(` ----- Server started on port ${port}`));




