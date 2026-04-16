import { Router } from 'express';
import getCategories from '../controllers/category.controller.js';


const categoryRouter = Router();

// Define your category routes here
categoryRouter.get('/all', getCategories);

export default categoryRouter;