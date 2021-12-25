import CLI from 'clui';
import Configstore from 'configstore';
const Spinner = CLI.Spinner;
import { createTokenAuth } from "@octokit/auth-token";

import inquirer from './inquirer.js';
import { Octokit } from 'octokit';

const conf = new Configstore('thecli');

let octokit

const getInstance = () => {
    return octokit;
}

const getStoredGithubToken = () => {
    return conf.get('github.token');
}

const getPersonalAccesToken = async () => {
    const response = await inquirer.askGithubPAT()
    const pat = response.pat
    const auth = createTokenAuth(pat)

    const status = new Spinner('Authenticating you, please wait...');
    status.start();

    try {
        const { token } = await auth()
        if (token) {
            conf.set('github.token', token);
            return token;
        } else {
            throw new Error("GitHub token was not found in the response");
        }
    }
    finally {
        status.stop();
    }
}

const initOctokit = () => {
    octokit = new Octokit({ auth: getStoredGithubToken() })
    octokit.rest.repos.createForAuthenticatedUser({
        name: 'test'
    })
}

export {
    getInstance,
    getStoredGithubToken,
    getPersonalAccesToken,
    initOctokit
}