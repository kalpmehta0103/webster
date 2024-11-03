const express = require('express');
const router = express.Router();
const TimeTable = require('../models/TimeTable');

router.get('/timeTable/:email', async (req, res) => {
    try {
        let success = false;
        const user = await TimeTable.findOne({email: req.params.email});
        if(!user) {
            res.status(401).json({message: "You need to create time table first!!"});
        } 
        sucess = true;
        res.status(201).json({success, user});
    } catch (error) {
        console.log(error);
        res.status(501).json({message: "Sorry, issue on our side"})
    }
});

router.post('/create/timeTable/:email', async (req, res) => {
    try {
        const user = await TimeTable.findOne({email: req.params.email});
        if(user) {
            res.status(401).json({message: "You have already created time table please update it instead of recreating it!!"});
        } else {
            const newUser = {
                "email": "",
                "timeTable": {
                    "monday": {
                        "8-9": "",
                        "9-10": "",
                        "10-11": "",
                        "11-12": "",
                        "12-13": "",
                        "13-14": "",
                        "14-15": "",
                        "15-16": "",
                        "16-17": "",
                        "17: 18": "",
                    },
                    "tuesday": {
                        "8-9": "",
                        "9-10": "",
                        "10-11": "",
                        "11-12": "",
                        "12-13": "",
                        "13-14": "",
                        "14-15": "",
                        "15-16": "",
                        "16-17": "",
                        "17: 18": "",
                    },
                    "wednesday": {
                        "8-9": "",
                        "9-10": "",
                        "10-11": "",
                        "11-12": "",
                        "12-13": "",
                        "13-14": "",
                        "14-15": "",
                        "15-16": "",
                        "16-17": "",
                        "17: 18": "",
                    },
                    "thursday": {
                        "8-9": "",
                        "9-10": "",
                        "10-11": "",
                        "11-12": "",
                        "12-13": "",
                        "13-14": "",
                        "14-15": "",
                        "15-16": "",
                        "16-17": "",
                        "17: 18": "",
                    },
                    "friday": {
                        "8-9": "",
                        "9-10": "",
                        "10-11": "",
                        "11-12": "",
                        "12-13": "",
                        "13-14": "",
                        "14-15": "",
                        "15-16": "",
                        "16-17": "",
                        "17: 18": "",
                    },
                    "saturday": {
                        "8-9": "",
                        "9-10": "",
                        "10-11": "",
                        "11-12": "",
                        "12-13": "",
                        "13-14": "",
                        "14-15": "",
                        "15-16": "",
                        "16-17": "",
                        "17: 18": "",
                    }
                }
            };
            console.log(newUser.timeTable.monday["8-9"]);
            newUser.email = req.params.email;
            if(req.body.monday0809) newUser.timeTable.monday["8-9"] = req.body.monday0809;
            if(req.body.monday0910) newUser.timeTable.monday["9-10"] = req.body.monday0910;
            if(req.body.monday1011) newUser.timeTable.monday["10-11"] = req.body.monday1011;
            if(req.body.monday1112) newUser.timeTable.monday["11-12"] = req.body.monday1112;
            if(req.body.monday1213) newUser.timeTable.monday["12-13"] = req.body.monday1213;
            if(req.body.monday1314) newUser.timeTable.monday["13-14"] = req.body.monday1314;
            if(req.body.monday1415) newUser.timeTable.monday["14-15"] = req.body.monday1415;
            if(req.body.monday1516) newUser.timeTable.monday["15-16"] = req.body.monday1516;
            if(req.body.monday1617) newUser.timeTable.monday["16-17"] = req.body.monday1617;
            if(req.body.monday1718) newUser.timeTable.monday["17-18"] = req.body.monday1718;
    
            if(req.body.tuesday0809) newUser.timeTable.tuesday["8-9"] = req.body.tuesday0809;
            if(req.body.tuesday0910) newUser.timeTable.tuesday["9-10"] = req.body.tuesday0910;
            if(req.body.tuesday1011) newUser.timeTable.tuesday["10-11"] = req.body.tuesday1011;
            if(req.body.tuesday1112) newUser.timeTable.tuesday["11-12"] = req.body.tuesday1112;
            if(req.body.tuesday1213) newUser.timeTable.tuesday["12-13"] = req.body.tuesday1213;
            if(req.body.tuesday1314) newUser.timeTable.tuesday["13-14"] = req.body.tuesday1314;
            if(req.body.tuesday1415) newUser.timeTable.tuesday["14-15"] = req.body.tuesday1415;
            if(req.body.tuesday1516) newUser.timeTable.tuesday["15-16"] = req.body.tuesday1516;
            if(req.body.tuesday1617) newUser.timeTable.tuesday["16-17"] = req.body.tuesday1617;
            if(req.body.tuesday1718) newUser.timeTable.tuesday["17-18"] = req.body.tuesday1718;
    
            if(req.body.wednesday0809) newUser.timeTable.wednesday["8-9"] = req.body.wednesday0809;
            if(req.body.wednesday0910) newUser.timeTable.wednesday["9-10"] = req.body.wednesday0910;
            if(req.body.wednesday1011) newUser.timeTable.wednesday["10-11"] = req.body.wednesday1011;
            if(req.body.wednesday1112) newUser.timeTable.wednesday["11-12"] = req.body.wednesday1112;
            if(req.body.wednesday1213) newUser.timeTable.wednesday["12-13"] = req.body.wednesday1213;
            if(req.body.wednesday1314) newUser.timeTable.wednesday["13-14"] = req.body.wednesday1314;
            if(req.body.wednesday1415) newUser.timeTable.wednesday["14-15"] = req.body.wednesday1415;
            if(req.body.wednesday1516) newUser.timeTable.wednesday["15-16"] = req.body.wednesday1516;
            if(req.body.wednesday1617) newUser.timeTable.wednesday["16-17"] = req.body.wednesday1617;
            if(req.body.wednesday1718) newUser.timeTable.wednesday["17-18"] = req.body.wednesday1718;
    
            if(req.body.thursday0809) newUser.timeTable.thursday["8-9"] = req.body.thursday0809;
            if(req.body.thursday0910) newUser.timeTable.thursday["9-10"] = req.body.thursday0910;
            if(req.body.thursday1011) newUser.timeTable.thursday["10-11"] = req.body.thursday1011;
            if(req.body.thursday1112) newUser.timeTable.thursday["11-12"] = req.body.thursday1112;
            if(req.body.thursday1213) newUser.timeTable.thursday["12-13"] = req.body.thursday1213;
            if(req.body.thursday1314) newUser.timeTable.thursday["13-14"] = req.body.thursday1314;
            if(req.body.thursday1415) newUser.timeTable.thursday["14-15"] = req.body.thursday1415;
            if(req.body.thursday1516) newUser.timeTable.thursday["15-16"] = req.body.thursday1516;
            if(req.body.thursday1617) newUser.timeTable.thursday["16-17"] = req.body.thursday1617;
            if(req.body.thursday1718) newUser.timeTable.thursday["17-18"] = req.body.thursday1718;
    
            if(req.body.friday0809) newUser.timeTable.friday["8-9"] = req.body.friday0809;
            if(req.body.friday0910) newUser.timeTable.friday["9-10"] = req.body.friday0910;
            if(req.body.friday1011) newUser.timeTable.friday["10-11"] = req.body.friday1011;
            if(req.body.friday1112) newUser.timeTable.friday["11-12"] = req.body.friday1112;
            if(req.body.friday1213) newUser.timeTable.friday["12-13"] = req.body.friday1213;
            if(req.body.friday1314) newUser.timeTable.friday["13-14"] = req.body.friday1314;
            if(req.body.friday1415) newUser.timeTable.friday["14-15"] = req.body.friday1415;
            if(req.body.friday1516) newUser.timeTable.friday["15-16"] = req.body.friday1516;
            if(req.body.friday1617) newUser.timeTable.friday["16-17"] = req.body.friday1617;
            if(req.body.friday1718) newUser.timeTable.friday["17-18"] = req.body.friday1718;
    
            if(req.body.saturday0809) newUser.timeTable.saturday["8-9"] = req.body.saturday0809;
            if(req.body.saturday0910) newUser.timeTable.saturday["9-10"] = req.body.saturday0910;
            if(req.body.saturday1011) newUser.timeTable.saturday["10-11"] = req.body.saturday1011;
            if(req.body.saturday1112) newUser.timeTable.saturday["11-12"] = req.body.saturday1112;
            if(req.body.saturday1213) newUser.timeTable.saturday["12-13"] = req.body.saturday1213;
            if(req.body.saturday1314) newUser.timeTable.saturday["13-14"] = req.body.saturday1314;
            if(req.body.saturday1415) newUser.timeTable.saturday["14-15"] = req.body.saturday1415;
            if(req.body.saturday1516) newUser.timeTable.saturday["15-16"] = req.body.saturday1516;
            if(req.body.saturday1617) newUser.timeTable.saturday["16-17"] = req.body.saturday1617;
            if(req.body.saturday1718) newUser.timeTable.saturday["17-18"] = req.body.saturday1718;
            
            await new TimeTable(newUser).save();
            res.status(201).json(newUser);
        }
    } catch (error) {
        console.log(error);
        res.status(501).json({message: "Sorry, issue on our side"});
    }
});

router.post('/update/timeTable/:email/:day/:slot', async (req, res) => {
    try {
        if(!TimeTable.findOne({email: req.params.email})) {
            res.status(401).json({message: "No user time table found"});
        }
        console.log(req.params);
        const result = await TimeTable.updateOne(
            {email: req.params.email},
            {$set: {
                [`timeTable.${req.params.day}.${req.params.slot}`]: req.body.subject
            }}
        )
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
        res.status(501).json({message: "It's not you it's us"})
    }
})

module.exports = router;