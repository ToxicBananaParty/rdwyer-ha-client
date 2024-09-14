import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { execSync } from 'child_process';
//import { baseCommand } from './utils.js';

dotenv.config({
    path: `/mnt/c/Users/Ryan-PC/Projects/rdwyer-ha-client/.env`,
});

const app = express();
const port = process.env.BACKEND_PORT || 6969;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// TODO: Routing per module
app.get('/', (req, res) => {
    res.send('root');
});

const getNumMonitors = (): number => {
    const displayInfo = execSync('xrandr', { encoding: 'utf-8' }).toLowerCase();
    //console.log(displayInfo);

    const regex = displayInfo.match(/xwayland/g);
    if (regex) {
        return regex.length;
    }

    return -1;
};

app.get('/displayMode', (req, res) => {
    res.send({ displayMode: getNumMonitors() });
});

app.post('/displayMode', (req, res) => {
    const numMonitors = getNumMonitors();
    if (numMonitors === 2) {
        // Currently in Couch Mode -> Switch to One Monitor
        // TODO: Kill steam if it is in big picture mode? How to get steam state?
        res.send({ displayMode: 1 });
        execSync('cmd.exe /C "displayswitch.exe /internal"');
    } else if (numMonitors === 1) {
        // Currently in Office Mode -> Switch to Two Monitors
        res.send({ displayMode: 2 });
        execSync('cmd.exe /C "displayswitch.exe /extend"');
        //TODO: Only do this part if req says I should
        setTimeout(() => {
            execSync('cmd.exe /C "start steam://open/bigpicture"');
        }, 5000);
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
