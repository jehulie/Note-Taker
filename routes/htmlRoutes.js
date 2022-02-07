// Dependencies
const path = require("path");

// Routing code

module.exports = app => {

    // HTML GET Request for returning the notes.html file
    app.get('/notes', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    // HTML GET Request for returning the index.html file
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
};