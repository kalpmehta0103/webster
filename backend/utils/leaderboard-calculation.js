const mongoose = require('mongoose');
const Point = require('../models/Point');

const findLeaderboard = (days) => {
    if(days == 0) {
        Point.aggregate([
            {
              $sort: { totalPoints: -1 } 
            }
          ]).exec((err, res) => {
            if (err) {
              console.error(err);
            } else {
              console.log(res);
              return res;
            }
          });
    } else {
        const daysInMiliSecond = days*24*60*60*1000;
        Point.aggregate([
            {
                $addFields: {
                    inbetweenTimePeriod: {
                        $reduce: {
                            input: {
                                $filter: {
                                    input: {
                                        $objectToArray: "$sectional"
                                    },
                                    as: "item",
                                    cond: {
                                        $gte: [
                                            {
                                                $toLong: "$$item.k"
                                            },
                                            {
                                                $divide: [
                                                    {
                                                        $subract: [
                                                            {
                                                                $toLong: new Date()
                                                            },
                                                            daysInMiliSecond
                                                        ]
                                                    },
                                                    1000
                                                ]
                                            }
                                        ]
                                    }
                                }
                            },
                            initialValue: 0,
                            in: {$add: ["$$value", "$$this.v"]}
                        }
                    }
                }
            },
            {
                $sort: {inbetweenTimePeriod: -1}
            }
        ]).exec((err, res) => {
            if(err) {
                console.log(err);
            } else {
                console.log(res);
                return res
            }
        })
    }
}