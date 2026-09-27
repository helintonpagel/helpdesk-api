import { Router } from "express";
import { CategoryController } from "../controllers/CategoryController.js";

export const categoryRouter = Router();
const categoryController = new CategoryController();

categoryRouter.get("/", categoryController.getAll);
categoryRouter.get("/:id", categoryController.getById);
