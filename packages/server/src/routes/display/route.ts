import { Router } from 'express';
import { exec, execSync } from 'child_process';
//import * as utils from '../../utils.js';
import * as displayUtils from './displayUtils.js';

export const router = Router();

router.get('/', (req, res) => {
    res.send('/display');
});

router.get('/mode', (req, res) => {
    res.send({ displayMode: displayUtils.getNumMonitors() });
});

router.post('/mode', (req, res) => {
    const numMonitors = displayUtils.getNumMonitors();
    if (numMonitors === 2) {
        // Currently in Couch Mode -> Switch to One Monitor
        // TODO: Kill steam if it is in big picture mode? How to get steam state?
        res.send({ displayMode: 1 });
        exec('cmd.exe /C "displayswitch.exe /internal"');
    } else if (numMonitors === 1) {
        // Currently in Office Mode -> Switch to Two Monitors
        res.send({ displayMode: 2 });
        execSync('cmd.exe /C "displayswitch.exe /extend"');
        if (req.body.steam === true) {
            setTimeout(() => {
                execSync('cmd.exe /C "start steam://open/bigpicture"');
            }, 5000);
        }
    }
});

export default router;
