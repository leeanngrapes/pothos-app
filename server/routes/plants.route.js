const router = require("express").Router();
let PlantModel = require("../models/plant.model");

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

router.route("/create").post((req, res) => {
  const {
    commonName,
    scientificName,
    imageUri,
    waterInfo,
    lightInfo,
    fertilizerInfo,
    pruningInfo,
    nickname,
    location,
    note,
  } = req.body;

  const newPlantDocument = new PlantModel({
    commonName,
    scientificName,
    imageUri,
    waterInfo,
    lightInfo,
    fertilizerInfo,
    pruningInfo,
    nickname,
    location,
    note,
  });

  newPlantDocument
    .save()
    .then(() => res.json("Plant added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//edit route for adding to sill
router.patch("/edit", (req, res) => {
  const { _id, newNickname, newLocation, newNote } = req.body;

  let updatedPlantDocument = {};

  //check for existence of properties
  if (newNickname) updatedPlantDocument.nickname = newNickname;
  if (newLocation) updatedPlantDocument.location = newLocation;
  if (newNote) updatedPlantDocument.note = newNote;

  //update document
  PlantModel.findByIdAndUpdate(
    {
      _id,
      newNickname,
      newLocation,
      newNote,
    },
    updatedPlantDocument,
    {
      new: true,
    }
  )
    .then((document) => {
      res.status(200).json(document);
    })
    .catch((err) => {
      res.status(404).send(`Did not find plant to update. Error: ${err}`);
    });
});

router.route("/").delete((req, res) => {
  const { _id } = req.body;

  PlantModel.findOneAndDelete({
    _id,
  })
    .then((document) => {
      res.status(200).json(document);
    })
    .catch((err) => {
      res.status(400).send("Could not find plant to delete.");
    });
});

module.exports = router;
