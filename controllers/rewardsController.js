const db = require("../models");

module.exports = {
  getLevel: function(req, res){
    db.Reward
      .findOne({ level: req.params.level })
      .populate({ path: 'chore', model: Chore })
      .then(dbModel => {
          console.log(dbModel.chores[0]);
          res.json(dbModel);
        })
      .catch(err => res.status(422).json(err));
  },
  findAll: function(req, res) {
    db.Reward
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Reward
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body);
    db.Reward
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Reward
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Reward
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};