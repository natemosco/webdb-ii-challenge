const express = require("express");
// const db = require("../dbConfig");
const carsModel = require("./carsModel");
const router = express.Router();

router.get("/", (req, res) => {
  get("cars")
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
  getById(id)
    .then(singleCar => {
      res.status(200).json();
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
    insert(newCar)
      .then(postedCar => {
        res
          .status(200)
          .json({ message: `car: ${postedCar} posted into database` });
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
