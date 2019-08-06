const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://monkeyseemonkey2do:monkeyseemonkey2do@ds033037.mlab.com:33037/heroku_2rbklfzx"
);

/*
const choreSeed = 
   [{
        choreName: "",
        level: "1",
        dueDate: Date.now,
        completion: false
    }];

db.Chore
    .remove({})
    .then(() => db.Chore.collection.insertMany(choreSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
    */
    

    

const rewardSeed =
    [{
        rewardName: "",
        level: "1"

    },
    {
        rewardName: "",
        level: "2"
    },
    {
        rewardName: "",
        level: "3"
    }];

db.Reward
    .remove({})
    .then(() => db.Reward.collection.insertMany(rewardSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });




