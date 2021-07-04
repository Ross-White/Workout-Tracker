const db = require('../models');

const getRangeController = async (req, res) => {
    try {
        const dbWorkouts = await db.Workout.aggregate([{
            $addFields: { totalDuration: { $sum: '$exercises.duration' }}
        }])
        .sort({ _id: -1 })
        .limit(7);
        if (!dbWorkouts) {
            res.status(404).json({ message: 'No Workouts Found! ' });
            return;
        }
        res.status(200).json(dbWorkouts);
    } catch (err) {
        res.status(500).json(err);
    }
};


module.exports = getRangeController;
