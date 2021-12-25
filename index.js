import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';

import files from './lib/files.js';
import { getStoredGithubToken, getPersonalAccesToken, initOctokit } from './lib/github.js';
import { initVuePOroject } from './lib/vue.js'
clear();

console.log(
    chalk.yellow(
        figlet.textSync('THE CLI', { horizontalLayout: 'full' })
    )
);

const run = async () => {
    let token = getStoredGithubToken();
    if (!token) {
        token = await getPersonalAccesToken();
    }
    initOctokit()
    initVuePOroject()
};

run()