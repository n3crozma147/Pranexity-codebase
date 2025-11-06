import { Request, Response, NextFunction } from "express";
import * as service from "../services/contactsService";

type AsyncHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;

const catchAsync =
  (fn: AsyncHandler) => (req: Request, res: Response, next: NextFunction) => {
    return fn(req, res, next).catch(next);
  };


const createContact = catchAsync(async (req: Request , res: Response , next : NextFunction) => {
  
})