/*eslint-disable  no-console*/
const jsf = require('json-schema-faker');
import { schema } from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';
import faker from 'faker';

jsf.extend('faker', () => faker);

const json = JSON.stringify(jsf.generate(schema));

fs.writeFile("./src/api/db.json", json, err => {
    if (err) {
        return console.log(chalk.red(err));
    }
    else {
        console.log(chalk.green("Mock data generated"));
    }
});