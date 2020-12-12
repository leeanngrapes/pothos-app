const router = require("express").Router();
const { query } = require("express");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

//not loading input validation, should be in Yup form and not needed

//load user model
let User = require("../models/user.model");

//add this once set up?:
//const usersStore = require("../store/users");
//const stillStore = require("../store/sill"); or plantStore?
//const auth = require("../middleware/auth");

//@route POST users/register
//@desc Register user
//@access Public
router.post("/register", (req, res) => {
  //form validation would go here
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      //Hash password before saving in database
      bcryptjs.genSalt(10, (err, salt) => {
        bcryptjs.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user)) //could return document instead of user ?
            .catch((err) => console.log(err));
        });
      });
    }
  });
});
//end POST route for register

//@route POSt /users/login
//@desc Login user and return JWT token
//@access Public
router.post("/login", (req, res) => {
  //where form validation would go
  //is this needed since I'm not doing the validation import?
  //const { name, email, password } = req.body;

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then((user) => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    // Check password
    bcryptjs.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create JWT payload
        const payload = {
          id: user.id,
          name: user.name,
        };

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926, // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

// this is from Backend folder:
// router.get("/:id", auth, (req, res) => {
//   const userId = parseInt(req.params.id);
//   const user = usersStore.getUserById(userId);
//   if (!user) return res.status(404).send();

//   const listings = listingsStore.filterListings(
//     listing => listing.userId === userId
//   );

//   res.send({
//     id: user.id,
//     name: user.name,
//     email: user.email,
//     listings: listings.length
//   });
// });

// module.exports = router;

//below code is old, first draft version:

router.get("/", (req, res) => {
  //this get request is returning back all users, need to fix.
  const { email } = req.body;

  if (email) {
    UserModel.find({ email })
      .then((document) => {
        res.status(200).json(document);
      })
      .catch((err) => {
        res.status(404).send(`Did not find the user. Error: ${err}`);
      });
  } else {
    UserModel.find()
      .then((document) => {
        res.status(200).json(document);
      })
      .catch((err) => {
        res.status(404).send(`Did not find the user. Error: ${err}`);
      });
  }
});

router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  let newUserDocument = new UserModel({
    name,
    email,
    password,
  });

  newUserDocument
    .save()
    .then((document) => {
      console.log(document);
      res.status(200).send(`Successfully created new user.`);
    })
    .catch((err) => {
      res.status(400).send(`Failed to create new user. Error: ${err}`);
    });
});

router.patch("/", (req, res) => {
  const { _id, email, newUsername, newPassword } = req.body;

  const updatedUserDocument = {};

  if (newUsername) updatedUserDocument.username = newUsername;
  if (newPassword) updatedUserDocument.password = newPassword;

  //Update the user document
  UserModel.findOneAndUpdate({ email }, updatedUserDocument, { new: true })

    .then((document) => {
      res.status(200).json(document);
    })
    .catch((err) => {
      res.status(404).send(`Did not find user to update. Error: ${err}`);
    });
});

router.delete("/", (req, res) => {
  const { _id } = req.body;

  UserModel.findOneAndDelete({ _id })
    .then((document) => {
      res.status(200).json(document);
    })
    .catch((err) => {
      res.status(404).send(`Did not find user to delete. Error: ${err}`);
    });
});

module.exports = router;
