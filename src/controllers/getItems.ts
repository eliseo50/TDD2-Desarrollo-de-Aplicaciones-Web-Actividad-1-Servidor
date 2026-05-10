import type { Request, Response } from "express";
import type { ItemType } from "./itemController.js";
import { items } from "./itemController.js";

export const getItems = (type: ItemType) => (_req: Request, res: Response) => {
  res.status(200).json(items[type]);
};
