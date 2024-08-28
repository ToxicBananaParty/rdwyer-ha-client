import dotenv from 'dotenv';
import express from 'express';
//import path from 'path';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 6969;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);

    setInterval(() => {
        console.log('Still listening!');
    }, 2000);
});
