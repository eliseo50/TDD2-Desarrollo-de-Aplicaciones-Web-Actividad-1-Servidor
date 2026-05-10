import dotenv from "dotenv";
dotenv.config();

import type { Request, Response, NextFunction } from "express";

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const apiKey = req.headers.authorization;
  const secret = process.env.API_KEY;

  if (!apiKey || apiKey !== secret) {
    return res.status(401).json({ message: "No autorizado" });
  }

  next();
};
