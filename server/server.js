const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Get the middleware
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");

// Database config
const db = require("./config/keys").mongoURI;

//adding consts for routes: //this threw error when placed below middleware section
const userRouter = require("./routes/users.route");
const plantsRouter = require("./routes/plants.route");

// Set up mongodb atlas connection
mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established! You go girl!!!");
});

// Use the middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //false?
app.use(cors());
app.use(passport.initialize());

require("./config/passport")(passport);

//Set up the routes
app.use("/users", userRouter);
app.use("/plants", plantsRouter);

//default route
app.get("/", (req, res) => {
  res.send(`I am in the correct route on port ${PORT}!`);
});

//Set up server
app.listen(PORT, () => {
  console.log(`Server is listening on port:${PORT}...`);
});
