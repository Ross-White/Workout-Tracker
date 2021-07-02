const db = require('../models');
const router = require('express').Router();

router.get('/workouts', (req, res) => {
    db.Workout.find({}, (err, dbWorkouts) => {
        if(err) {
            console.log(err);
        } else {
            res.json(dbWorkouts)
        }
    });
});


module.exports = router;