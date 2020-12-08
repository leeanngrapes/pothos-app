const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

//Add database connection
const database = require("./database");

//Get the middleware
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

//require("dotenv").config();

//Use the middleware
app.use(express.json()); //needed?
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//set up mongodb atlas connection

// const MongoClient = require("mongodb").MongoClient;
// const uri =
//   "mongodb+srv://lgrapes:adminPothos20@pothoscluster.j50ac.mongodb.net/Pothos?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect((err) => {
//   const collection = client.db("test").collection("devices");
//   //perform actions on the collection object
//   client.close();
// });

const uri =
  "mongodb+srv://lgrapes:adminPothos20@pothoscluster.j50ac.mongodb.net/Pothos?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established! You go girl.");
});

//Set up the routes
app.use("/users", require("./routes/users"));

//Set up server
app.listen(PORT, () => {
  console.log(`Server is listening on port:${PORT}...`);
});
