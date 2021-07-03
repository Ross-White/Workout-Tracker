const router = require('express').Router();

const getAllWorkoutsController = require('../controllers/getAllWorkouts');
const updateWorkoutController = require('../controllers/updateWorkoutController');
const newWorkoutController = require('../controllers/newWorkoutController');

router.get('/workouts', getAllWorkoutsController);
router.put('/workouts/:id', updateWorkoutController);
router.post('/workouts', newWorkoutController);


module.exports = router;