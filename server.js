// server.js
import 'dotenv/config';

import express, { json } from 'express';

import manufacturerRoutes from './routes/manufacture.route.js';
import modelRoutes from './routes/model.route.js';
import tutorialRoutes from './routes/tutorial.route.js';

const app = express();

app.use(json());

// Register routes
app.use('/manufacturers', manufacturerRoutes);
app.use('/models', modelRoutes);
app.use('/tutorials', tutorialRoutes);

// Basic test route
app.get('/', (req, res) => {
    res.send('API is running');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});