import express from 'express';
import cors from 'cors';
import { readdirSync, existsSync } from 'fs';
import * as utils from './utils.js';

const dirname = utils.dirName(import.meta.url);

const app = express();
const port = process.env.BACKEND_PORT || 6969;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// Import routes
const routes = readdirSync(dirname + '/routes');
routes.forEach((routeName) => {
    //Exclude hidden directories
    if (routeName.startsWith('.')) return;

    const routerPath = `${dirname}/routes/${routeName}/route.js`;
    if (existsSync(routerPath)) {
        console.log(`Found router for route ${routeName} at ${routerPath}`);
        import(routerPath).then((module) => {
            app.use(`/${routeName}`, module.default);
        });
    }
});

app.get('/', (req, res) => {
    res.send('root');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
