import express from 'express';
import Router from './routes/index.js';

const app = express();
const PORT = 1245;

app.use('/', Router);
app.use('/students', Router);
app.use('/students/:major', Router);

app.listen(PORT);

export default app;
