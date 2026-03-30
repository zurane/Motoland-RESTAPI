import Router from 'express';
import { searchCore } from '../controllers/search.controller.js';

const SearchRouter = Router();

SearchRouter.get('/search', searchCore);

export default SearchRouter;