const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

//Add database connection
const database = require('./database');

//Get the middleware
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

//Use the middleware
app.use(express.json()); //needed?
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//Set up the routes
app.use('/users', require('./routes/users'));

//Set up server
app.listen(PORT, () => {
    console.log(`Server is listening on port:${PORT}...`);
});