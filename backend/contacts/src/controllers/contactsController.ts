import { Request, Response, NextFunction } from "express";
import * as service from "../services/contactsService";
import { createContactSchema, updateContactSchema } from "../validation/contactsValidation";

export async function listContacts(req: Request, res: Response, next: NextFunction) {
  try {
    const q = String(req.query.q ?? "");
    const page = Math.max(1, Number(req.query.page) || 1);
    const limit = Math.min(100, Number(req.query.limit) || 20);
    const data = await service.listContacts({ q, page, limit });
    res.json(data);
  } catch (err) {
    next(err);
  }
}

export async function getContact(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const contact = await service.getContact(id);
    if (!contact) return res.status(404).json({ error: "Contact not found" });
    res.json(contact);
  } catch (err) {
    next(err);
  }
}

export async function createContact(req: Request, res: Response, next: NextFunction) {
  try {
    const parsed = createContactSchema.parse(req.body);
    const contact = await service.createContact(parsed);
    res.status(201).json(contact);
  } catch (err) {
    next(err);
  }
}

export async function updateContact(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const parsed = updateContactSchema.parse(req.body);
    const updated = await service.updateContact(id, parsed);
    res.json(updated);
  } catch (err) {
    next(err);
  }
}

export async function deleteContact(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    await service.deleteContact(id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}
