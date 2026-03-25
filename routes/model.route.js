import { Router } from "express";
import getTutorialsByModel from "../controllers/model.controller.js";

const modelRoutes = Router();

modelRoutes.get('/:id/tutorials', getTutorialsByModel);

export default modelRoutes;