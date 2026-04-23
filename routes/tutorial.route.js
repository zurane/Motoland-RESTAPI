import { Router } from 'express';
import getAllModelTutorials from '../controllers/tutorial.controller.js';


const tutorialRoute = Router();

tutorialRoute.get('/:tutorialId/:model/:slug', getAllModelTutorials);

export default tutorialRoute;