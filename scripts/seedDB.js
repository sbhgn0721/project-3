const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/monkeySeeMonkey2Dodb"
);

const choreSeed =
    [{
        choreName: "brush your teeth",
        level: "1",
        dueDate: Date.now,
        completion: false
    }];

db.Reward
    .remove({})
    .then(() => db.Reward.collection.insertMany(choreSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

const rewardSeed =
    [{
        rewardName: "watch Lion King",
        level: "1"

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





