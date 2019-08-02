const db = require("../models");

module.exports = {
  getLevelChore: function (req, res) {
    db.Reward.find({ level: req.params.level })
      .populate("chores")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAll: function (req, res) {
    db.Reward
      .find()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Reward
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log(req.body);
    db.Reward
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    console.log(req.params.level.toString());
    db.Reward
      .findOneAndUpdate({ level: req.params.level }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateById: function(req, res) {
    console.log(req.params.id.toString());
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