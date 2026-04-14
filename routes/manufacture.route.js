import { Router } from 'express'
import { getManufacturerModels, getAllManufacturers } from '../controllers/manufacture.controller.js'



const manufacturerRoutes = Router();

manufacturerRoutes.get('/:name/models', getManufacturerModels);
manufacturerRoutes.get('/all', getAllManufacturers);

export default manufacturerRoutes;
