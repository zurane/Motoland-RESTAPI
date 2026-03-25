import { Router } from 'express';
import getAllModelTutorials from '../controllers/tutorial.controller.js';


const tutorialRoute = Router();

tutorialRoute.get('/', getAllModelTutorials);

export default tutorialRoute;