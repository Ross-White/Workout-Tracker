const db = require('../models');

const updateWorkoutController = (req, res) => {
    db.Workout.findOneAndUpdate({ _id: req.params.id },
        { $push: { exercises: { 
                "type" : req.body.type,
                "name" : req.body.name,
                "duration" : req.body.duration,
                "distance" : req.body.distance,
                "weight" : req.body.weight,
                "reps" : req.body.reps,
                "sets" : req.body.sets
                } 
            } },
        { new: true })
        .then((updatedWorkout) => {
            res.json(updatedWorkout);
        })
    .catch((err) => {
        res.json(err);
    })
};

module.exports = updateWorkoutController;