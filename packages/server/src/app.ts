import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { execSync } from 'child_process';
import { baseCommand } from './utils.js';

dotenv.config({
    path: `/mnt/c/Users/Ryan-PC/Projects/rdwyer-ha-client/.env`,
});

const app = express();
const port = process.env.PORT || 6969;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get('/', (req, res) => {
    res.send('root');
});

app.get('/numTwo', (req, res) => {
    res.send('numTwo');
    execSync(baseCommand);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
