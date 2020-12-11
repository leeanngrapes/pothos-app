const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

//Get the middleware
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

//adding consts for routes:
const plantsRouter = require("./routes/plants.route");

//Use the middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//Set up the routes
app.use("/users", require("./routes/users"));
app.use("/plants", plantsRouter);

//default route
app.get("/", (req, res) => {
  res.send(`I am in the correct route on port ${PORT}!`);
});

//set up mongodb atlas connection
const uri =
  "mongodb+srv://lgrapes:adminPothos20@pothoscluster.j50ac.mongodb.net/Pothos?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established! You go girl.");
});

//Set up server
app.listen(PORT, () => {
  console.log(`Server is listening on port:${PORT}...`);
});
