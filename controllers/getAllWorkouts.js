const db = require('../models');

const getAllWorkoutsController = async (req, res) => {
    try {
        const dbWorkouts = await db.Workout.find({});
        if (!dbWorkouts) {
            res.status(404).json({ message: 'No Workouts Found! ' });
            return;
        }
        res.status(200).json(dbWorkouts);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = getAllWorkoutsController;