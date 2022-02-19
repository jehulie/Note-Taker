// Dependencies
const path = require("path");
const router = require("express").Router();

// Routing code

    // HTML GET Request for returning the notes.html file
    router.get('/notes', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    // HTML GET Request for returning the index.html file
    router.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    module.exports = router;