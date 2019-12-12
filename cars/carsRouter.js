const express = require("express");
// const db = require("../dbConfig");
const carsModel = require('./carsModel');
const router = express.Router();

router.get('/', (req, res) => {
    
        get('cars')
        .then(cars =>{
            res.status(200).json(cars);
        })
        .catch(error => {
            console.log(error, 'Error from get /');
            res.status(500).json({ errorMessage: 'internal error fetching all cars'});
        });
});
router.get('/:id', (req, res) => {
    const id = req.params.id
        getById(id)
        .then( singleCar=> {
            res.status(200).json();
        })
        .catch(error => {
            console.log(error, 'Error from get /');
            res.status(500).json({ errorMessage: 'internal error fetching '});
        });
});
router.get('/', (req, res) => {
    
        .()
        .then( => {
            //console.log(, 'response from GET /');
            res.status(200).json();
        })
        .catch(error => {
            console.log(error, 'Error from get /');
            res.status(500).json({ errorMessage: 'internal error fetching '});
        });
});
router.get('/', (req, res) => {
    
        .()
        .then( => {
            //console.log(, 'response from GET /');
            res.status(200).json();
        })
        .catch(error => {
            console.log(error, 'Error from get /');
            res.status(500).json({ errorMessage: 'internal error fetching '});
        });
});
router.get('/', (req, res) => {
    
        .()
        .then( => {
            //console.log(, 'response from GET /');
            res.status(200).json();
        })
        .catch(error => {
            console.log(error, 'Error from get /');
            res.status(500).json({ errorMessage: 'internal error fetching '});
        });
});

module.exports = router;