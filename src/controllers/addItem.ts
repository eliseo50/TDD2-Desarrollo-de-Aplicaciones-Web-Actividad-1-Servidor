import type { Request, Response } from "express";
import type { ItemType } from "./itemController.js";
import type { Item } from "../types/Item.js";
import { items } from "./itemController.js";

export const addItem = (type: ItemType) => (req: Request, res: Response) => {
  const newItem: Item = {
    name: req.body.name,
    description: req.body.description,
    date: req.body.date,
    id: crypto.randomUUID(),
  };

  if (!validateItem(newItem)) {
    return res.status(400).json({ message: "Item invalido" });
  }

  items[type].push(newItem);

  res.status(200).json(newItem);
};

function validateItem(item: Item): boolean {
  const { name, description, date } = item;
  return !!(name && description && date);
}
