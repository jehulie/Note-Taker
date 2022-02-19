var fs = require("fs");
const util = require('util');
// imported 'uuid' npm package for unique id
const { v4: uuidv4 } = require('uuid');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Notes{
    read(){
        return readFileAsync("db/db.json", "utf-8")
       };
    write(note){
        return writeFileAsync("db/db.json", JSON.stringify(note))
    };
    get(){
        return this.read().then((notes)=>{
            let readNotes;
            try {
                readNotes = [].concat(JSON.parse(notes))
            } catch (error) {
                readNotes =[]      
            }
            return readNotes;
        });
    };
    add(note){
        const {title, text} = note;
        const newNote = {title, text, id:uuidv4()}
        return this.get()
        .then((notes)=>[...notes,newNote])
        .then((updatedNotes)=>this.write(updatedNotes))
        .then(()=>newNote)
    };
    delete(id){
        return this.get()
        .then((notes)=>notes.filter((note)=>note.id!==id))
        .then((filterNotes)=>this.write(filterNotes))
    };
}

module.exports= new Notes();