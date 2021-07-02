const db = require('../models');
const router = require('express').Router();

const getAllWorkoutsController = require('../controllers/getAllWorkouts');

router.get('/workouts', getAllWorkoutsController);



module.exports = router;