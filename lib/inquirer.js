import inquirer from 'inquirer'

export default {
    askGithubPAT: () => {
        const questions = [
            {
                name: 'pat',
                type: 'input',
                message: 'Enter your GitHub personnal access token (https://github.com/settings/tokens/new):',
                validate: function (value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter your GitHub personnal access token (https://github.com/settings/tokens/new)';
                    }
                }
            },
        ];
        return inquirer.prompt(questions);
    },
};