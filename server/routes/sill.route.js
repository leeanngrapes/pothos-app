const router = require("express").Router();
const { update } = require("../models/sill.model");
let PlantModel = require("../models/sill.model");

router.route("/").get((req, res) => {
  PlantModel.find()
    .then((plants) => res.json(plants))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  PlantModel.findById(req.params.id)
    .then((document) => res.json(document))
    .catch((err) => res.status(400).json("Error: " + err));
});

//add to sill would actually be a patch?
router.route("/add").post((req, res) => {
  const {
    nickname,
    location,
    note,
    imageUri,
    commonName,
    waterInfo,
    lightInfo,
  } = req.body;
  const newPlantDocument = new PlantModel({
    nickname,
    location,
    note,
    imageUri,
    commonName,
    waterInfo,
    lightInfo,
  });

  newPlantDocument
    .save()
    .then((document) => res.json("Sill Plant added: " + document))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").patch((req, res) => {
  const { _id, newNickname, newLocation, newNote, newImageUri } = req.body;
  console.log(req.body);

  let updatedPlantDocument = {};

  //Check for existence of properties
  if (newNickname) updatedPlantDocument.nickname = newNickname;
  if (newLocation) updatedPlantDocument.location = newLocation;
  if (newNote) updatedPlantDocument.note = newNote;
  if (newImageUri) updatedPlantDocument.imageUri = newImageUri;

  //Update the plant document
  PlantModel.findByIdAndUpdate(_id, updatedPlantDocument, {
    new: true,
  })
    .then((document) => {
      res.status(200).json(document);
      console.log("Made it through patch request route.");
    })
    .catch((err) => {
      res.status(404).send(`Did not find plant to update. Error: ${err}`);
    });
});

router.route("/").delete((req, res) => {
  const { _id } = req.body;
  console.log(_id);

  PlantModel.findByIdAndDelete(_id)

    .then((document) => {
      res.status(200).json(document);
      console.log("Made it through delete request route.");
    })
    .catch((err) => {
      res
        .status(400)
        .send(`Could not find Sill plant to delete. Error: ${err}`);
    });
});

module.exports = router;
