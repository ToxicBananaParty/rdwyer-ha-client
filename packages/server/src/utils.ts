import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

dotenv.config({
    path: `/mnt/c/Users/Ryan-PC/Projects/rdwyer-ha-client/.env`,
});

export const baseCommand = `cmd.exe /C "${process.env.CLI_PATH}"`;

export const dirName = (url: string): string => {
    return dirname(fileURLToPath(url));
};
