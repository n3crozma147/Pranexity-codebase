import express from 'express';
import { createContactController } from '../controllers/contactsController';

const router = express.Router();

router.post('/contactUs', createContactController);

export default router;