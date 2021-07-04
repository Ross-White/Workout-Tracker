const router = require('express').Router();

const getAllWorkoutsController = require('../controllers/getAllWorkoutsController');
const updateWorkoutController = require('../controllers/updateWorkoutController');
const newWorkoutController = require('../controllers/newWorkoutController');
const getRangeController = require('../controllers/getRangeController');

router.get('/workouts', getAllWorkoutsController);
router.put('/workouts/:id', updateWorkoutController);
router.post('/workouts', newWorkoutController);
router.get('/workouts/range', getRangeController);

module.exports = router;