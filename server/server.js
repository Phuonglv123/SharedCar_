const express = require('express');
const app = express();
const mongoose = require('mongoose');


const bodyParser = require('body-parser');
const passport = require('passport');


// mongoDB config
const db = require('./database').mongoURL;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// body parser middleware application/json
app.use(bodyParser.json());

//passport
app.use(passport.initialize());
require('./config/passport')(passport);

// API
const users = require('./routes/api/users');
const passenger = require('./routes/api/api_Passenger');
// mongoDB connect
mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log(" ----- MongoDB starting..."))
    .catch(err => console.log(err));



app.use((req, res, next) => {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type'
    });
    next();
})


app.use('/api/passenger', require('./routes/api/api_Passenger'));
app.use('/api/driver', require('./routes/api/api_Driver'));
app.use('/api/home', require('./routes/api/api_Index'));
app.use('/api/trip', require('./routes/api/api_Trips'));



const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log('listening on port' + port);
})

