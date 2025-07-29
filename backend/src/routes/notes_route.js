import express from 'express';

import { createNote, getNotes, updateNote, deleteNote } from '../controllers/notes_controller.js';

const router = express.Router();

router.post('/create', createNote);
router.get('/get', getNotes);
router.put('/update/:id', updateNote);
router.delete('/delete/:id', deleteNote);

export default router;
