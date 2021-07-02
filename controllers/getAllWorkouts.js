const db = require('../models');

const getAllWorkoutsController = (req, res) => {
    db.Workout.find({}, (err, dbWorkouts) => {
        if(err) {
            console.log(err);
        } else {
            res.json(dbWorkouts)
        }
    });
};

module.exports = getAllWorkoutsController;