const db = require('../models');
const router = require('express').Router();

const getAllWorkoutsController = require('../controllers/getAllWorkouts');
const updateWorkoutController = require('../controllers/updateWorkoutController');

router.get('/workouts', getAllWorkoutsController);
router.put('/workouts/:id', updateWorkoutController);


module.exports = router;