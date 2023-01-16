const express = require("express");
const router = express.Router();
const AppOperationsController = require("../Controllers/AppOperationsController");

router.get('/weeklyPet', AppOperationsController.getPetOfTheWeek);


module.exports = router;

