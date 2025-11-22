import express from 'express';
import contactsController from '../controllers/contactsController';

const router = express.Router();

router.post('/', contactsController.createContactController
);

export default router;
