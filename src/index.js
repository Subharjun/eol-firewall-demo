import chalk from 'chalk';
import express from 'express';
const app = express();
app.get('/', (req, res) => res.send(chalk.green('hello from a very outdated stack')));
app.listen(3000, () => console.log(chalk.blue('listening on :3000')));