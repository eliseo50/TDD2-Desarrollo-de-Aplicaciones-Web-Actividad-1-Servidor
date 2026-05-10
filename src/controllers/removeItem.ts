import type { Request, Response } from "express";
import type { ItemType } from "./itemController.js";
import { items } from "./itemController.js";

export const removeItem = (type: ItemType) => (req: Request, res: Response) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ message: "ID requerido" });
  }

  const removedItem = items[type].find((item) => item.id === id);

  if (!removedItem) {
    return res.status(404).json({ message: "Item no encontrado" });
  }

  items[type] = items[type].filter((item) => item.id !== id);
  res.status(200).json(removedItem);
};
