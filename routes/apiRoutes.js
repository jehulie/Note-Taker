const router = require("express").Router();
const notes = require("../db/notes");


// Reading db.json file and returning all saved notes as JSON
router.get("/notes", function (req, res) {
    notes.get()
        .then((notes) => {
            return res.json(notes)
        }).catch((err) => res.status(500).json(err))
});

// Receiving and saving new note - with unique ID - to db.json file and returning new note to client
router.post("/notes", function (req, res) {
    notes.add(req.body)
        .then((notes) => {
            return res.json(notes)
        }).catch((err) => res.status(500).json(err))
});

// Receiving request to delete note with specific ID and then updating db.json file with that note removed
router.delete("/notes/:id", function (req, res) {
    notes.delete(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch((err) => res.status(500).json(err))
});

module.exports = router;