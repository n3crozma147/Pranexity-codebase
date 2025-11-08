import express from 'express';
import contactsController from '../controllers/contactsController';

const router = express.Router();

router.post('/contactUs', contactsController.createContactController
);

export default router;
