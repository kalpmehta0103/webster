const express = require('express');
const router = express.Router();
const findLeaderboard = require('../utils/leaderboard-calculation');

router.get('/leaderBoard/:days', async (req, res) => {
    try {
        const leaderboard = await findLeaderboard(req.params.days);
        res.status(201).send(leaderboard);
    } catch (error) {
        console.log(error);
        res.status(501).json({message: "It's not you it's us"})
    }
});
module.exports = router;