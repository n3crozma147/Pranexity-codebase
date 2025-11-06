import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod"; // runtime validation lib , 

export function errorHandler(err: any, _req: Request, res: Response, _next: NextFunction) {
  if (err instanceof ZodError) {
    console.log(err)
    return res.status(400).json({ error: "Validation error", issues: err.errors });
  }
  if (err.code === "P2002") {
    // prisma unique constraint fail (e.g., email)
    return res.status(409).json({ error: "Unique constraint failed", meta: err.meta });
  }
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || "Internal Server Error" });
}
