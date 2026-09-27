import { Router } from "express";
import { TechnicianController } from "../controllers/TechnicianController.js";

export const technicianRouter = Router();
const technicianController = new TechnicianController();

technicianRouter.get("/", technicianController.getAll);
technicianRouter.get("/:id", technicianController.getById);
