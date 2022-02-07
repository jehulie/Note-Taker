// Dependencies
const path = require("path");

// Routing

module.exports = app => {

    // HTML GET Requests for returning the notes.html and the index.html files

    app.get('/notes', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
};