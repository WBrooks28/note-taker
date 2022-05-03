const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const { findById, createNewNote } = require('../lib/notes.js');

let notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

// get request for all notes
router.get('/notes', (req, res) => {
    return res.json(notes);
});

// get note by id
router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

// create note
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    const note = createNewNote(req.body, notes);
    res.json(note);
});

module.exports = router;