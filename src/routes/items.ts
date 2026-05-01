import { Router } from "express";
import type { Request, Response } from "express";
import { getItems } from "../controllers/getItems.js";
import { addItem } from "../controllers/addItem.js";
import { removeItem } from "../controllers/removeItem.js";

const router = Router();

router.get("/getTasks", getItems("task"));
router.post("/addTask", addItem("task"));
router.delete("/removeTask", removeItem("task"));

router.get("/getGoals", getItems("goal"));
router.post("/addGoal", addItem("goal"));
router.delete("/removeGoal", removeItem("goal"));

export default router;
