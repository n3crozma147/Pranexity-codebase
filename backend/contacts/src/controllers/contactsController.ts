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


const createContactController = catchAsync(async (req: Request , res: Response , next : NextFunction) => {
  console.log(req.body)
  const data = contactSchema.parse(req.body);

  const contactDoc = await prisma.contactUs.create({
    data
  })
    const exportsDir = path.join(process.cwd(), "exports");
    fs.mkdirSync(exportsDir, { recursive: true });

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Contacts");

    // Header row
    sheet.columns = [
      { header: "id", key: "id", width: 36 },
      { header: "name", key: "name", width: 30 },
      { header: "email", key: "email", width: 30 },
      { header: "phoneNumber", key: "phoneNumber", width: 20 },
      { header: "message", key: "message", width: 50 },
      { header: "companyName", key: "companyName", width: 30 },
    ];

    // Add the stored contact as a single row
    sheet.addRow({
      id: (contactDoc as any).id,
      name: (contactDoc as any).name,
      email: (contactDoc as any).email,
      phoneNumber: (contactDoc as any).phoneNumber ?? (contactDoc as any).phone ?? "",
      message: (contactDoc as any).message,
      companyName: (contactDoc as any).companyName ?? "",
    });

    const fileName = `contact-${contactDoc.id}.xlsx`;
    const filePath = path.join(process.cwd(), "exports", fileName);

    await workbook.xlsx.writeFile(filePath);
    // optionally add the file path to the response for convenience
    res.status(201).json({ contact: contactDoc, excelFile: filePath });
  } 
)

export default { createContactController }