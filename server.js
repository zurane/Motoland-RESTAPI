// server.js
import 'dotenv/config';
import express, { json } from 'express';
import cors from 'cors';

import manufacturerRoutes from './routes/manufacture.route.js';
import categoryRoutes from './routes/category.route.js';
import modelRoutes from './routes/model.route.js';
import tutorialRoute from './routes/tutorial.route.js';
import searchRoutes from './routes/search.route.js';

const app = express();

app.use(json());
app.use(cors({
    origin: 'http://localhost:5173', // Adjust this to your frontend URL
}));

// Register routes
app.use('/manufacturers', manufacturerRoutes);
app.use('/models', modelRoutes);
app.use('/tutorials', tutorialRoute);
app.use('/categories', categoryRoutes);
app.use('/', searchRoutes);


// Basic test route
app.get('/', (req, res) => {
    res.send('API is running');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});