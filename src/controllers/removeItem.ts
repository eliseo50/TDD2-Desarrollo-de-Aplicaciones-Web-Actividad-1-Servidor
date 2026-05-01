import type { Request, Response } from "express";
import type { ItemType } from "./itemController.js";
import { items } from "./itemController.js";

export const removeItem = (type: ItemType) => (req: Request, res: Response) => {
  const { id } = req.body;
  const removedItem = items[type].find((item) => item.id === id);
  items[type] = items[type].filter((item) => item.id !== id);
  res.json(removedItem);
};
