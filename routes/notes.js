const express = require('express');
const { addNote , getNote , deleteNote} = require('../controllers/note-controller');

const router = express.Router();


router.post('/create_note', addNote);
router.get('/get_note',getNote)
router.delete('/delete_note/:id',deleteNote)

module.exports = router;