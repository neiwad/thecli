import { exec } from 'child_process'
import inquirer from './inquirer.js'

const initVuePOroject = () => {
    inquirer.askVueProject()
}

export { initVuePOroject }