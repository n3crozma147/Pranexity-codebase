<<<<<<< HEAD
import { z } from "zod";

export const contactSchema = z.object({
  name : z.string().min(4),
  email : z.string().email().refine((val) => val.endsWith(".com")),
  phone : z.string().min(10).max(10).optional(),
  company : z.string().optional(),
  message : z.string()
})
=======
import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
});
>>>>>>> main
