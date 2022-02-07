var fs = require("fs");

// imported 'uuid' npm package for unique id
const { v4: uuidv4 } = require('uuid');

module.exports = app => {

    // Set up notes variable
    fs.readFile("db/db.json", "utf8", (err, data) => {

        if (err) throw err;

        var notes = JSON.parse(data);


        // Reading db.json file and returning all saved notes as JSON
        app.get("/api/notes", function (req, res) {

            console.log('Executing Get notes request');

            res.json(notes);
        });
    });

    // Receiving and saving new note - with unique ID - to db.json file and returning new note to client
    app.post("/api/notes", function (req, res) {
        // Extract new note from request body
        let newNote = req.body;

        console.log("Post request - new Note: " + newNote);

        //Assign unique id from 'uuid' npm package 
        newNote.id = uuidv4();

        // Push new note into notes file, db.json
        notes.push(newNote);

        fs.writeFile("db/db.json", JSON.stringify(notes), function (err) {
            if (err) throw err;
            },

            console.log("Successfully added new note: " + newNote.title)
        );
    });

    // Receiving request to delete note with specific ID and then updating db.json file with that note removed
    app.delete("/api/notes/:id", function (req, res) {
        res.send('Got a DELETE request at /api/notes/:id')

        let noteID = req.params.id.toString();

        const newData = notes.filter(note => note.id.toString() !== noteID);

        fs.writeFile("db/db.json", JSON.stringify(newData), function (err) {
            if (err) throw err;
            },

            console.log("Successfully deleted note with ID" + req.params.id));

            res.json(newData);
        });
}