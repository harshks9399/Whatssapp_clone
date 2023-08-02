import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import Connection from './database/db.js';
import Routes from './routes/route.js';


dotenv.config();
const app = express();


const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username, password);


const PORT = 8000;

app.listen(PORT, () => console.log(`The server is running successfully on PORT ${PORT}`));

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);