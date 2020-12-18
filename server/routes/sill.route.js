const router = require("express").Router();
const { update } = require("../models/sill.model");
let SillPlantModel = require("../models/sill.model");

router.route("/").get((req, res) => {
  SillPlantModel.find()
    .then((plants) => res.json(plants))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  SillPlantModel.findById(req.params.id)
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
  const newSillPlantDocument = new SillPlantModel({
    nickname,
    location,
    note,
    imageUri,
    commonName,
    waterInfo,
    lightInfo,
  });

  newSillPlantDocument
    .save()
    .then((document) => res.json("Sill Plant added: " + document))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").patch((req, res) => {
  const {
    _id,
    newNickname,
    newLocation,
    newNote,
    newImageUri,
    newFertilizingNote,
    newPruningNote,
    newPropagationNote,
  } = req.body;

  let updatedSillPlantDocument = {};

  //Check for existence of properties
  if (newNickname) updatedSillPlantDocument.nickname = newNickname;
  if (newLocation) updatedSillPlantDocument.location = newLocation;
  if (newNote) updatedSillPlantDocument.note = newNote;
  if (newImageUri) updatedSillPlantDocument.imageUri = newImageUri;
  if (newFertilizingNote)
    updatedSillPlantDocument.fertilizingNote = newFertilizingNote;
  if (newPruningNote) updatedSillPlantDocument.pruningNote = newPruningNote;
  if (newPropagationNote)
    updatedSillPlantDocument.propagationNote = newPropagationNote;

  //Update the plant document
  SillPlantModel.findByIdAndUpdate(_id, updatedSillPlantDocument, {
    new: true,
  })
    .then((document) => {
      res.status(200).json(document);
    })
    .catch((err) => {
      res.status(404).send(`Did not find plant to update. Error: ${err}`);
    });
});

router.route("/").delete((req, res) => {
  const { _id } = req.body;

  SillPlantModel.findByIdAndDelete(_id)

    .then((document) => {
      res.status(200).json(document);
    })
    .catch((err) => {
      res
        .status(400)
        .send(`Could not find Sill plant to delete. Error: ${err}`);
    });
});

module.exports = router;
