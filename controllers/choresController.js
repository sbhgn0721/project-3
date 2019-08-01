const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Chore
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Chore
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log(req.body);
    db.Chore
      .create(req.body)
      .then((chore)=>{
        db.Reward.findOne({level:req.body.level})
        .then(reward => {
          reward.chores.push(chore._id);
          db.Reward.findOneAndUpdate({level:reward.level}, reward)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
        })
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Chore.findOne({_id:req.params.id})
    .then(chore=>{
      if(chore.level !== req.body.level){
        db.Reward.findOne({level:chore.level})
        .then(reward=>{
          let index = reward.chores.indexOf(chore._id);
          reward.chores.splice(index, 1);
          db.Reward.findOneAndUpdate({_id:reward._id}, reward)
          .then(()=>{
            db.Reward.findOne({level:req.body.level})
            .then(newReward=>{
              newReward.chores.push(chore._id);
              db.Reward.findOneAndUpdate({level:req.body.level}, newReward)
              .then(dbModel => res.json(dbModel))
              .catch(err => res.status(422).json(err));
            })
          })
        })
      }
    })
    .then(()=>{
      db.Chore
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    
    })
    
  },
  remove: function (req, res) {
    db.Chore
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then((chore)=>{
        db.Reward.findOne({level:chore.level})
        .then(reward => {
          let index = reward.chores.indexOf(chore._id);
          console.log('index',chore._id, 'index is ',index);
          reward.chores.splice(index, 1);
          console.log('reward',reward);
          db.Reward.findOneAndUpdate({_id:reward._id}, reward)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
        })
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};