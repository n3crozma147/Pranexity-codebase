import { z } from "zod";

export const contactSchema = z.object({
  name : z.string().min(4),
  email : z.string().email().refine((val) => val.endsWith(".com")),
  phone : z.string().min(10).max(10).optional(),
  company : z.string().optional(),
  message : z.string()
})