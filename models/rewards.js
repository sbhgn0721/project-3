const mongoose =  require("mongoose");
const Schema = mongoose.Schema;


const RewardSchema =  new Schema ({
    rewardName: { type: String, required: true},
    level: {type: String, required: true},
    completion: {type: Boolean, required: true, default: false},
    chores: [{ type: Schema.Types.ObjectId, ref: "Chore" }]

})


const Reward = mongoose.model("Reward", RewardSchema);

module.exports = Reward;
