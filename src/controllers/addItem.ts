import type { Request, Response } from "express";
import type { ItemType } from "./itemController.js";
import type { Item } from "../types/Item.js";
import { items } from "./itemController.js";

export const addItem = (type: ItemType) => (req: Request, res: Response) => {
  const newItem: Item = req.body;
  items[type].push(newItem);
  res.json(newItem);
};
