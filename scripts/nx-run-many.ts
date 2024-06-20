/* eslint-disable no-magic-numbers */
import { execCommands } from './exec-commands';

const args = process.argv.slice(2);

import { cpus } from 'node:os';

const allowedArgs = ['--lint', '--test', '--build', '--fix'];

const nxCmd = args.shift();
if (nxCmd !== 'run-many' && nxCmd !== 'affected') {
  throw new Error('Only nx "run-many" and "affected" are allowed');
}
const targets: string[] = [];

allowedArgs.forEach((arg) => {
  if (args.includes(arg)) {
    targets.push(arg.replace('--', ''));
  }
});

const cmd = `nx ${nxCmd} --maxParallel ${cpus().length - 1} -t ${targets.join(
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
