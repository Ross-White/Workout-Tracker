const db = require('../models');

const updateWorkoutController = async ({ body, params }, res) => {
    try {
        const updatedWorkout = await db.Workout.findByIdAndUpdate(params.id,
            { $push: { exercises: body }},
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