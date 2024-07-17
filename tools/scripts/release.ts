// this file can be used to run custom release scripts

// not used, just as an example, taken from nx github repo

import { releaseChangelog, releasePublish, releaseVersion } from 'nx/release';
import * as yargs from 'yargs';

(async () => {
  const options = await yargs
    .version(false) // don't use the default meaning of version in yargs
    .option('version', {
      description:
        'Explicit version specifier to use, if overriding conventional commits',
      type: 'string',
    })
    .option('dryRun', {
      alias: 'd',
      description:
        'Whether or not to perform a dry-run of the release process, defaults to true',
      type: 'boolean',
      default: true,
    })
    .option('verbose', {
      description:
        'Whether or not to enable verbose logging, defaults to false',
      type: 'boolean',
      default: false,
    })
    .parseAsync();

  const { workspaceVersion, projectsVersionData } = await releaseVersion({
    specifier: options.version,
    // dryRun: options.dryRun,
    dryRun: true,
    verbose: options.verbose,
    // deleteVersionPlans,
    // gitCommitMessage,
    // gitTagMessage,
    // gitCommitArgs,
    // gitTagArgs,
    // gitCommit,
    // gitTag,
    // stageChanges,
    // groups,
    // projects,
    // firstRelease,
    // preid,
    // generatorOptionsOverrides
  });
  console.group('Workspace Version');
  console.log(workspaceVersion);
  console.log(projectsVersionData);

  const { projectChangelogs, workspaceChangelog } = await releaseChangelog({
    versionData: projectsVersionData,
    version: workspaceVersion,
    // dryRun: options.dryRun,
    dryRun: true,
    verbose: options.verbose,
    // firstRelease,
    // projects,
    // groups,
    // stageChanges,
    // from,
    // to,
    // gitTag,
    // gitCommit,
    // gitRemote,
    // gitTagArgs,
    // interactive,
    // createRelease,
    // gitCommitArgs,
    // gitTagMessage,
    // gitCommitMessage,
    // deleteVersionPlans
  });
  console.group('Workspace Changelog');
  console.log(workspaceChangelog);
  console.log(projectChangelogs);

  // The returned number value from releasePublish will be zero if all projects are published successfully, non-zero if not
  const publishStatus = await releasePublish({
    // dryRun: options.dryRun,
    dryRun: true,
    verbose: options.verbose,
    //  projects
    //  dte,
    //  otp,
    //  tag,
    //  prod,
    //  batch,
    //  cloud,
    //  graph,
    //  groups,
    //  nxBail,
    //  runner,
    //  exclude,
    //  parallel,
    //  registry,
    //  useAgents,
    //  maxParallel,
    //  outputStyle,
    //  skipNxCache,
    //  firstRelease,
    //  nxIgnoreCycles
  });

  process.exit(publishStatus);
})();
