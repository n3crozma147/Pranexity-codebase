import { Router } from "express";
import * as ctrl from "../controllers/contactsController";

const router = Router();

/**
 * Routes:
 * GET    /api/contacts         -> list (with optional ?q= search & ?page & ?limit)
 * GET    /api/contacts/:id     -> get one
 * POST   /api/contacts         -> create
 * PUT    /api/contacts/:id     -> update
 * DELETE /api/contacts/:id     -> delete
 */

router.get("/", ctrl.listContacts);
router.get("/:id", ctrl.getContact);
router.post("/", ctrl.createContact);
router.put("/:id", ctrl.updateContact);
router.delete("/:id", ctrl.deleteContact);

export default router;
