const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

const inqs = [
    {
        type:'input',
        name:'name',
        message:'What is the name of your project?*',
        validate: titleInput => {
            if (titleInput){
                return true;
            } else {
                console.log('Please enter your project name!');
                return false
            }
        }
    },
    {
        type:'input',
        name:'description',
        message:'Please provide a description for your project.',
        validate: descriptionInput => {
            if (descriptionInput){
                return true;
            } else {
                console.log('Please enter a description for this project!')
                return false;
            }
        }
    },
    {
        type:'input',
        name:'install',
        message:'Please provide a step-by-step description of how to get the development environment running.',
        validate: installInput => {
            if (installInput){
                return true;
            } else {
                console.log('Please add installation requirements!')
                return false;
            }
        }
    },
    {
        type:'input',
        name:'use',
        message:'Provide instructions and examples of program usage.'
    },
    {
        type:'input',
        name:'colabs',
        message:'List your collaborators if applicable.'
    },
    {
        type:'input',
        name:'test',
        message:'Please provide an example on how to run your project.'
    },
    {
        type:'list',
        name:'license',
        message:'Please choose a license type.',
        choices: [
            {name: 'MIT'},
            {name: 'GNU'},
            {name: 'ISC'},
            {name: 'none'}
        ],
        validate: licenseInput => {
            if (licenseInput){
                return true;
            } else {
                console.log('Please choose a license-type');
                return false;
            }
        }
    },
    {
        type:'input',
        name:'username',
        message:'What is your GitHub username? (Required)',
        validate: userInput => {
            if (userInput){
                return true;
            } else {
                console.log('Please enter your GitHub user name!');
                return false;
            }
        }
    }
];


function writeToFile(file, data) {
    return fs.writeFile(file, data, (err) => {
        if (err) {
            throw Error(err)
        }
    });
}


function init() {
    inquirer.prompt(inqs)
    .then(answers => {
        const mD = generateMarkdown(answers)
        writeToFile('READGen.md', mD)
    })
}


init();

