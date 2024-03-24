#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';

const answers = await inquirer.prompt([
    {name: 'numone', type: 'number', message: 'Enter first number? '},
    {name: 'numtwo', type: 'number', message: 'Enter second number? '},
    {name: 'operators', type: 'list', choices: ['Add', 'Sub', 'Mul', 'Div', 'Mod']}
])

let result: number;

switch(answers.operators) {
    case 'Add':
        result = answers.numone + answers.numtwo;
        console.log(chalk.green(`Addition of ${answers.numone} + ${answers.numtwo} is ${result}`));
    break;
    case 'Sub':
        result = answers.numone - answers.numtwo;
        console.log(chalk.green(`Subtraction of ${answers.numone} - ${answers.numtwo} is ${result}`));
    break;
    case 'Mul':
        result = answers.numone * answers.numtwo;
        console.log(chalk.green(`Multiplication of ${answers.numone} * ${answers.numtwo} is ${result}`));
    break;
    case 'Div':
        result = answers.numone / answers.numtwo;
        console.log(chalk.green(`Division of ${answers.numone} / ${answers.numtwo} is ${result}`));
    break;
    case 'Mod':
        result = answers.numone % answers.numtwo;
        console.log(chalk.green(`Modulus of ${answers.numone} % ${answers.numtwo} is ${result}`));
    break;
    default:
        console.log(chalk.red('Invalid operator'));
    break;
}