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

router.route("/add").post((req, res) => {
  const { commonName, scientificName, imageUrl } = req.body;
  const newPlantDocument = new PlantModel({
    commonName,
    scientificName,
    imageUrl,
  });

  newPlantDocument
    .save()
    .then(() => res.json("Plant added!"))
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
      res.status(400).send("Could not find plant to delete.");
    });
});

module.exports = router;
