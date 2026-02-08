const express = require('express');
const router = express.Router();
const { createNote, getNotes, deleteNotes } = require('../controllers/note.controllers.js');
router.post('/create',createNote);
router.get('/all',getNotes);
router.delete('/delete/:_id',deleteNotes);


module.exports = router;