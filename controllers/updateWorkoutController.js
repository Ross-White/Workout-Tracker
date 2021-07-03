const db = require('../models');

const updateWorkoutController = async (req, res) => {
    try {
        const updatedWorkout = await db.Workout.findOneAndUpdate({ _id: req.params.id },
            {
                $push: {
                    exercises: {
                        "type": req.body.type,
                        "name": req.body.name,
                        "duration": req.body.duration,
                        "distance": req.body.distance,
                        "weight": req.body.weight,
                        "reps": req.body.reps,
                        "sets": req.body.sets
                    }
                }
            },
            { new: true });
        if (!updatedWorkout) {
            res.status(404).json({ message: 'No Workout!' });
            return;
        }
        res.status(200).json(updatedWorkout);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = updateWorkoutController;