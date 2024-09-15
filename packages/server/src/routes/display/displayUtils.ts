import { execSync } from 'child_process';

export const getNumMonitors = (): number => {
    const displayInfo = execSync('xrandr', { encoding: 'utf-8' }).toLowerCase();
    //console.log(displayInfo);

    const regex = displayInfo.match(/xwayland/g);
    if (regex) {
        return regex.length;
    }

    return -1;
};
