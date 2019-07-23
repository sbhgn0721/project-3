const router = require("express").Router();
const notesController = require("../../controllers/notesController")

router.route("/")
    .get(notesController.findAllNotes)
    .post(notesController.createNote);

router
    .route("/:id")
    .get(notesController.findNoteById)
    .put(notesController.updateNote)
    .delete(notesController.removeNote);
    
router
    .route("/comment/:id")
    .post(notesController.makeComment)
    .delete(notesController.removeComment);

module.exports = router;
