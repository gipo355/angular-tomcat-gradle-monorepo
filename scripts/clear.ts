/* eslint-disable no-magic-numbers */
import { execCommands } from './exec-commands.js';

const args = process.argv.slice(2);

/**
 * map to commands
 */
const cmds = {
  folders: `find . \
-type d \
( \
-name .angular \
-o -name .nx \
-o -name node_modules \
-o -name tsconfig.tsbuildinfo \
-o -name dist \
-o -name coverage \
-o -name .eslintcache \
-o -name .cache \
-o -name .stylelintcache \
-o -name test-dist \
-o -name .classpath \
-o -name .project \
-o -name build \
-o -name tmp \
-o -name .settings \
-o -name .gradle \
-o -name .bin \
) \
-exec rm -rf {} +`,

  files: `find . \
-type f \
( \
-name .classpath \
-o -name .project \
-o -name .settings \
) \
-exec rm -rf {} +`,

  cache: `find . \
  -type d \
( \
-name .eslintcache \
-o -name .cache \
-o -name .stylelintcache \
) \
-exec rm -rf {} +`,
};

/**
 * map of arguments to commands
 */
const execsMappings = {
  '--cache': cmds.cache,
  '--folders': cmds.folders,
  '--files': cmds.files,
};

execCommands(execsMappings, args);
