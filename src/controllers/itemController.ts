import type { Item } from "../types/Item.js";

export type ItemType = "goal" | "task";

const items: Record<ItemType, Item[]> = {
  goal: [
    {
      id: "1",
      name: "Learn TypeScript",
      description: "Learn TypeScript",
      date: "2026-01-01",
    },
  ],
  task: [
    {
      id: "1",
      name: "Buy milk",
      description: "Buy milk from the store",
      date: "2026-01-01",
    },
  ],
};

export { items };
