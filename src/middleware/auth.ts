import dotenv from "dotenv";
dotenv.config();

import type { Request, Response, NextFunction } from "express";

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;
  const secret = process.env.API_KEY;

  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorized: Missing Authorization header" });
  }

  // Support both "Bearer <token>" and raw API key formats
  const apiKey = authHeader.startsWith("Bearer ")
    ? authHeader.slice(7)
    : authHeader;

  if (apiKey !== secret) {
    return res.status(401).json({ message: "Unauthorized: Invalid API key" });
  }

  next();
};
