<<<<<<< HEAD
import { Router } from "express";
import contactsController from "../controllers/contactsController";

export const contactRouter = Router();
contactRouter.post("/" , contactsController.createContactController)
=======
import express from 'express';
import { createContactController } from '../controllers/contactsController';

const router = express.Router();

router.post('/contactUs', createContactController);

export default router;
>>>>>>> main
