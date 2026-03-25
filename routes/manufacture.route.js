import { Router } from 'express'
import getManufacturerModels from '../controllers/manufacture.controller.js'


const manufacturerRoutes = Router();

manufacturerRoutes.get('/:name/models', getManufacturerModels);

export default manufacturerRoutes;
