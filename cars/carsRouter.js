const express = require("express");
// const db = require("../dbConfig");
const carsModel = require("./carsModel");
const router = express.Router();

router.get("/", (req, res) => {
  carsModel
    .get()
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(error => {
      console.log(error, "Error from get /");
      res
        .status(500)
        .json({ errorMessage: "internal error fetching all cars" });
    });
});
router.get("/:id", (req, res) => {
  const id = req.params.id;
  carsModel
    .getById(id)
    .then(singleCar => {
      res.status(200).json(singleCar);
    })
    .catch(error => {
      console.log(error, "Error from get /");
      res.status(500).json({ errorMessage: "internal error fetching " });
    });
});
router.post("/", (req, res) => {
  const newCar = req.body;
  if (!newCar.VIN || !newCar.make || !newCar.model || !newCar.mileage) {
    res.status(404).json({
      errorMessage:
        "new car data requires all of the following: VIN, make, model and mileage. Current data incomplete."
    });
  } else {
    carsModel
      .insert(newCar)
      .then(postedCar => {
        res.status(200).json({
          message: `${postedCar.make} ${postedCar.model} posted into database`,
          car: postedCar
        });
      })
      .catch(error => {
        console.log(error, "Error from post /");
        res.status(500).json({
          errorMessage: "internal error creating new post please try again "
        });
      });
  }
});

module.exports = router;
