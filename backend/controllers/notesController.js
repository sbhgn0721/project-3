// Load Note model and bring in Mongoose
const db = require("../models");

module.exports = {
    // retrieve all notes
    findAllNotes: function (req, res) {
        console.log("findAll", req.body);
        db.Note
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => {
                console.log("notesController", dbModel[0]._id);
                res.json(dbModel)
            })
            .catch(err => res.status(422).json(err));
    },
    // get a specific note and populate with its comment(s)
    findNoteById: function (req, res) {
        console.log("findbyID", req.params.id)
        db.Note
            .findById(req.params.id)
            .populate("comment")
            .then(dbModel => {
                console.log("find One", dbModel);
                res.json(dbModel)
            })
            .catch(err => {
                console.log("findbyID", err), res.status(422).json(err);
            })
    },
    // create a note
    createNote: function (req, res) {
        console.log("create", req.body);
        db.Note
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // update a specific note
    updateNote: function (req, res) {
        db.Note
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => {
                console.log("Update", dbModel)
                res.json(dbModel)
            })
            .catch(err => res.status(422).json(err));
    },
    // create/update a specific comment of its associated Note
    makeComment: function (req, res) {
        // Create a new comment and pass the req.body to the entry
        db.Comment.create(req.body)
            .then(function (dbComment) {
                db.Note.findOneAndUpdate({ _id: req.params.id }, { $push: { comment: dbComment._id } }, { new: true })
                    .then(function (dbModel) {
                        console.log(dbModel);
                        res.json(dbModel);
                    })
                    .catch(function (err) {
                        // If an error occurred, send it to the client
                        res.json(err);
                    });
            })
            .catch(err => res.status(422).json(err));
    },
    // remove a specific note
    removeNote: function (req, res) {
        db.Note
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // remove a specific comment
    removeComment: function (req, res) {
        db.Comment
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
};
