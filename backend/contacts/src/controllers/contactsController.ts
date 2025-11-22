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

const createContactController = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // Validate input
    const data = contactSchema.parse(req.body);

    // Insert into DB
    const contactDoc = await prisma.contactUs.create({ data });

    // Ensure exports folder exists
    const exportsDir = path.join(process.cwd(), "exports");
    fs.mkdirSync(exportsDir, { recursive: true });

    // Create Excel file
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Contacts");
    sheet.columns = [
      { header: "ID", key: "id", width: 36 },
      { header: "Name", key: "name", width: 30 },
      { header: "Email", key: "email", width: 30 },
      { header: "Phone", key: "phone", width: 20 },
      { header: "Company", key: "company", width: 30 },
      { header: "Message", key: "message", width: 50 },
      { header: "Preferred Time", key: "preferredTime", width: 20 },
    ];

    sheet.addRow({
      id: contactDoc.id,
      name: contactDoc.name,
      email: contactDoc.email,
      phone: contactDoc.phone ?? "",
      company: contactDoc.company ?? "",
      message: contactDoc.message,
      preferredTime: contactDoc.preferredTime ?? "",
    });

    const fileName = `contact-${contactDoc.id}.xlsx`;
    const filePath = path.join(exportsDir, fileName);

    await workbook.xlsx.writeFile(filePath);

    res.status(201).json({
      success: true,
      message: "Contact saved successfully",
      contact: contactDoc,
      excelFile: filePath,
    });
  }
);

export default { createContactController };
