import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';

import files from './lib/files.js';
import { getStoredGithubToken, getPersonalAccesToken, initOctokit } from './lib/github.js';

import { exec } from 'child_process'

clear();

console.log(
    chalk.yellow(
        figlet.textSync('THE CLI', { horizontalLayout: 'full' })
    )
);

if (files.directoryExists('.git')) {
    console.log(chalk.red('Already a Git repository!'));
    process.exit();
}

const run = async () => {
    let token = getStoredGithubToken();
    if (!token) {
        token = await getPersonalAccesToken();
    }
    initOctokit()
};

run()