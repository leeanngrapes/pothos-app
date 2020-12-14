const router = require("express").Router();
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

router.route("/").delete((req, res) => {
  const { _id } = req.body;

  PlantModel.findOneAndDelete({
    _id,
  })
    .then((document) => {
      res.status(200).json(document);
    })
    .catch((err) => {
      res.status(400).send("Could not find Sill plant to delete.");
    });
});

module.exports = router;
