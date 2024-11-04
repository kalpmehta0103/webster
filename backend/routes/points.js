const express = require('express');
const router = express.Router();
const Point = require('../models/Point');
const User = require('../models/User');

router.get('/:email', async(req, res) => {
    try {
        const user = await User.findOne({email: req.params.email});
        if(!user) {
            res.status(201).json({message: "Please register first"});
        }
        const points = await Point.findOne({user_id: user._id});
        res.status(201).json(points);
    } catch (error) {
        console.log(error);
        res.status(501).json({message: "It's not you it's us"})
    }
});

router.post('/:email/:type', async(req, res) => {
    try {
        const pointDistribution = {
            "easy": 40,
            "medium": 80,
            "hard": 120,
            "attendance": 10
        };
        const user = await User.findOne({email: req.params.email});

        if(!user) {
            res.status(201).json({message: "Please register to get started :)"});
        }
        let points = await Point.findOne({user_id: user._id});
        if(!points) {
            const newPoint = {
                "user_id": user._id,
                "name": user.name,
                "totalPoints": pointDistribution[req.params.type],
                "sectional": {}
            }
            const currTimeinmillisecond = new Date().getTime();
            newPoint.sectional[currTimeinmillisecond.toString()] = pointDistribution[req.params.type];
            await new Point(newPoint).save();
            res.status(201).json({message: "successfully allocated the point!!"});
        } else {
            const currTimeinmillisecond = new Date().getTime();
            console.log(currTimeinmillisecond);
            const dynamicSectionalKey = `sectional.${currTimeinmillisecond.toString()}`
            await Point.updateOne({user_id: user._id}, {$set: {
                totalPoints: points.totalPoints + pointDistribution[req.params.type],
                [dynamicSectionalKey]: pointDistribution[req.params.type]
            }});
            res.status(201).json(points);
        }
    } catch (error) {
        console.log(error);
        res.status(501).json("It's not you it's us!!");
    }
});
module.exports = router;