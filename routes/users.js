const router = require("express").Router();
const { query } = require("express");
let UserModel = require("../models/user.model");

router.get("/", (req, res) => {
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

router.post("/createNewUser", (req, res) => {
  const { username, email, password } = req.body;

  let newUserDocument = new UserModel({
    username,
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
