const chalk = require('chalk');
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send(chalk.green('hello from a very outdated stack')));
app.listen(3000, () => console.log(chalk.blue('listening on :3000')));