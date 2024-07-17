// this file can be used to run custom release scripts

// not used, just as an example, taken from nx github repo

// https://nx.dev/blog/versioning-and-releasing-packages-in-a-monorepo
// https://nx.dev/features/manage-releases#using-the-programmatic-api-for-nx-release
// https://nx.dev/recipes/nx-release/publish-in-ci-cd

// NOTE: looks like it still reads root nx.json props for release

import { releaseChangelog, releasePublish, releaseVersion } from 'nx/release';
import * as yargs from 'yargs';

const release = async () => {
  const options = await yargs
    .version(false) // don't use the default meaning of version in yargs
    .option('version', {
      alias: 'v',
      description:
        'Explicit version specifier to use, if overriding conventional commits',
      type: 'string',
    })
    .option('pre', {
      alias: 'p',
      description: 'Specify the preid to use for the release',
      type: 'string',
    })
    .option('dryRun', {
      alias: 'd',
      description:
        'Whether or not to perform a dry-run of the release process, defaults to true',
      type: 'boolean',
    })
    .option('verbose', {
      description:
        'Whether or not to enable verbose logging, defaults to false',
      type: 'boolean',
      default: false,
    })
    .option('firstRelease', {
      description:
        'Whether or not this is the first release of the project, defaults to false',
      type: 'boolean',
      default: false,
    })
    .parseAsync();

  const { workspaceVersion, projectsVersionData } = await releaseVersion({
    specifier: options.version,
    dryRun: options.dryRun,
    // dryRun: true,
    verbose: options.verbose,
    // deleteVersionPlans,
    // gitCommitMessage,
    // gitTagMessage,
    // gitCommitArgs,
    // gitTagArgs,
    gitCommit: false,
    gitTag: true,
    // stageChanges,
    // groups,
    // projects,
    firstRelease: options.firstRelease,
    preid: options.pre,
    // generatorOptionsOverrides
  });
  // console.group('Workspace Version');
  // console.log(workspaceVersion); // 1.0.0
  // console.log(projectsVersionData);
  //  {
  //   'tomcat-angular-boilerplate': {
  //     currentVersion: '0.0.2',
  //     newVersion: '1.0.0',
  //     dependentProjects: []
  //   },
  // }

  const { projectChangelogs, workspaceChangelog } = await releaseChangelog({
    versionData: projectsVersionData,
    version: workspaceVersion,
    dryRun: options.dryRun,
    // dryRun: true,
    verbose: options.verbose,
    firstRelease: options.firstRelease,
    // projects,
    // groups,
    // stageChanges,
    // from,
    // to,
    gitTag: false,
    gitCommit: false,
    // gitRemote,
    // gitTagArgs,
    // interactive,
    createRelease: false,
    // gitCommitArgs,
    // gitTagMessage,
    // gitCommitMessage,
    // deleteVersionPlans
  });
  // console.group('Workspace Changelog');
  // console.log(workspaceChangelog);
  // {
  //    releaseVersion: ReleaseVersion {
  //      rawVersion: '1.0.0',
  //      gitTag: 'v1.0.0',
  //      isPrerelease: false
  //    },
  //    contents: '# 1.0.0 (2024-07-17)\n' +
  //      '\n' +
  //      '\n' +
  //      '### 🚀 Features\n' +
  //  }
  // console.log(projectChangelogs);
  //  {
  //     'tomcat-angular-boilerplate': {
  //       releaseVersion: ReleaseVersion {
  //         rawVersion: '1.0.0',
  //         gitTag: 'v1.0.0',
  //         isPrerelease: false
  //       },
  //       contents: '# 1.0.0 (2024-07-17)\n' +
  //         '\n' +
  //         '\n' +
  //         '### 🚀 Features\n' +
  //         }
  // }

  // The returned number value from releasePublish will be zero if all projects are published successfully, non-zero if not
  // const publishStatus = await releasePublish({
  // dryRun: options.dryRun,
  // //   dryRun: true,
  //   verbose: options.verbose,
  //   //  projects
  //   //  dte,
  //   //  otp,
  //   //  tag,
  //   //  prod,
  //   //  batch,
  //   //  cloud,
  //   //  graph,
  //   //  groups,
  //   //  nxBail,
  //   //  runner,
  //   //  exclude,
  //   //  parallel,
  //   //  registry,
  //   //  useAgents,
  //   //  maxParallel,
  //   //  outputStyle,
  //   //  skipNxCache,
  //   firstRelease: options.firstRelease,
  //   //  nxIgnoreCycles
  // });
  // process.exit(publishStatus);
  process.exit(0);
  // return;
};

release().catch((e: unknown) => {
  console.error(e);
  process.exit(1);
});
