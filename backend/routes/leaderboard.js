const express = require('express');
const router = express.Router();
const findLeaderboard = require('../utils/leaderboard-calculation');

router.get('/leaderboard/:days', async (req, res) => {
    const leaderboard = await findLeaderboard(req.params.days);
    res.status(201).send(leaderboard);
});