import { z } from "zod";

export const createContactSchema = z.object({
  name: z.string().min(1, "name is required"),
  email: z.string().email("invalid email"),
  phone: z.string().optional(),
  notes: z.string().optional()
});

export const updateContactSchema = z.object({
  name: z.string().min(1).optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  notes: z.string().optional()
});
