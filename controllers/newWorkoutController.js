const db = require('../models');

const newWorkoutController = async (req, res) => {
    try {
        const newWorkout = await db.Workout.create({
            exercises: [req.body]
        })
        if (!newWorkout) {
            res.status(404).json({ message: 'Unable to create workout' });
            return;
        }
        res.status(200).json(newWorkout);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = newWorkoutController;