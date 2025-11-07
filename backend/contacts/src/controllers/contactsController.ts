import { Request, Response, NextFunction } from "express";
import { contactSchema } from "../validation/contactsValidation";
import { PrismaClient } from "@prisma/client";
import ExcelJS from "exceljs";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

type AsyncHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;

const catchAsync =
  (fn: AsyncHandler) => (req: Request, res: Response, next: NextFunction) => {
    return fn(req, res, next).catch(next);
  };

export const createContactController = catchAsync(async (req: Request, res: Response) => {
  const data = contactSchema.parse(req.body);

  const contactDoc = await prisma.contactUs.create({
    data
  });

  const exportsDir = path.join(process.cwd(), "exports");
  fs.mkdirSync(exportsDir, { recursive: true });

  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("Contacts");

  sheet.columns = [
    { header: "id", key: "id", width: 36 },
    { header: "name", key: "name", width: 30 },
    { header: "email", key: "email", width: 30 },
    { header: "phone", key: "phone", width: 20 },
    { header: "company", key: "company", width: 30 },
    { header: "message", key: "message", width: 50 }
  ];

  sheet.addRow(contactDoc);

  const fileName = `contact-${contactDoc.id}.xlsx`;
  await workbook.xlsx.writeFile(path.join(exportsDir, fileName));

  res.status(201).json({
    status: 'success',
    data: contactDoc
  });
});