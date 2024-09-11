import dotenv from 'dotenv';

dotenv.config({
    path: `/mnt/c/Users/Ryan-PC/Projects/rdwyer-ha-client/.env`,
});

export const baseCommand = `cmd.exe /C "${process.env.CLI_PATH}"`;
