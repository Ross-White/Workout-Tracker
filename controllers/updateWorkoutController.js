const db = require('../models');

const updateWorkoutController = ({ params, body }, res) => {
    db.Exercise.create(body)
        .then(({ _id }) => db.Workout.findOneAndUpdate({ _id: params.id },
            { $push: { exercises: _id } },
            { new: true }))
        .then((updatedWorkout) => {
            res.json(updatedWorkout);
        })
        .catch((err) => {
            res.json(err);
        })
};

module.exports = updateWorkoutController;