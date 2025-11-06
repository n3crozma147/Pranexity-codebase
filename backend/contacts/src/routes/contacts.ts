import { Router } from "express";
import contactsController from "../controllers/contactsController";

export const contactRouter = Router();
contactRouter.post("/" , contactsController.createContactController)
