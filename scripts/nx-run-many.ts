/* eslint-disable no-magic-numbers */
import { execCommands } from './exec-commands';

const args = process.argv.slice(2);

import { cpus } from 'node:os';

const allowedArgs = ['--lint', '--test', '--build', '--fix'];

const targets: string[] = [];

allowedArgs.forEach((arg) => {
  if (args.includes(arg)) {
    targets.push(arg.replace('--', ''));
  }
});

const cmd = `nx run-many --maxParallel ${cpus().length - 1} -t ${targets.join(
  ' '
)}`;
console.log(`Running: ${cmd}`);

/**
 * map of arguments to commands
 */
const execsMappings = {
  base: cmd,
};

execCommands(execsMappings, args, true);
