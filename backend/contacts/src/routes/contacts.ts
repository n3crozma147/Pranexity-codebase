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



export default router;
