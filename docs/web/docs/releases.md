# Releases

doc section about versioning, releases and publishing in nx

## changesets

- doesn't provide direct ability to customize the publish command.
- github release of every tagged project is done by the
[changesets/action](https://github.com/changesets/action)
- doesn't provide custom assets to be added to the release
- provides some individual commands: `add`, `version`, `publish`, `tag`, `pre
enter/exit`
- `tag` command allows tagging only public or both public + private packages
- allows grouping subprojects and bumping them together

### pre-release

One can enter pre-release mode by specifying `changeset pre enter <tag>` flag

This creates a `{workspaceRoot}/.changeset/pre.json` where it keeps track of the
reference tag versions.
```json
{
  "mode": "pre",
  "tag": "dev",
  "initialVersions": {
    "@gipo355/angular-test-app": "0.0.2",
    "@gipo355/tomcat-angular-boilerplate": "0.0.1",
    "@gipo355/tomcat-api-boilerplate": "0.0.1",
    "@gipo355/angular-lib": "1.0.0",
    "@gipo355/angular-lib-publish": "1.0.0",
    "@gipo355/jakarta-base-rest": "0.0.1",
    "@gipo355/smispi": "1.1.3"
  },
  "changesets": [
    "angry-laws-jam",
    "green-tomatoes-deliver",
    "mean-mirrors-call",
    "modern-buttons-hear",
    "old-eels-enjoy",
    "silent-weeks-tap"
  ]
}
```

when ready to reconcile the pre-release version with the stable version, one can
run:
- `changeset pre exit` to define an intent to exit
- `changeset version` to consume changesets and bump the packages to the next version (based on initialVersions + changesets)

::: danger
this is the most error-prone part of the process
:::

After a reconciliation, the changes must be reflected in the `pre` branch if
it's a rolling `dev` release

A possible flow could be:
- create a branch based on the new stable, run `changeset pre enter dev` there, merge
  the changes back into `dev` to reflect the new initial versions

#### **Handling a Release Candidate (rc)**

Assuming `dev` is a rolling branch, the `rc` branch is created from `dev` and
prepares the release candidate to be tested and then merged into `main`.

Those could be the steps on branch `rc` or `next` forked from the `dev` branch:
- `changeset pre exit` _to define an intent to exit_
- `changeset version` _to consume changesets and bump the packages to the next version (based on initialVersions + changesets)_ - this produces the "stable" versions
- `changeset pre enter rc` _to enter pre-release mode for release candidate_ -
this would base the RC initial versions on the stable versions derived from dev
and allow publishing it with the `rc` tag
- when ready to release the RC, `changeset pre exit`, `changeset version` and
merge into `main` - could be automated with a pr in ci

::: warning
What if a hotfix must be applied to the `rc` branch?

Should it be rebased from `dev`? Should it be applied directly to `rc` and then
upstreamed to `dev`?

This is the most difficult part of the process.

Still work in progess
:::

#### Storing a release for an LTS

::: warning
not implemented
:::

Is this possible only when using a sync strategy?


## nx release

::: warning
nx release is in beta
:::

As anticipated in [nx](./nx.md#release), the release process is managed by the `nx release` command and is split in 3 commands or 1 that does it all.

While `nx version` and `nx changelog` are good, they lack some features and are
quite strict on customization options.

### **The problems**

We are now referring to individual commands.

#### nx version

- the command bumps versions based on conventional commits if configured
- can enter pre-release mode by specifying `--preid` flag
- requires manual versioning when switching off of `preid`, doesn't keep track
of stable versions and doesn't reconcile it with the pre-release version
automatically

#### nx changelog

- the `nx release changelog` command requires manually specifying the version to generate the changelogs (one may suppose it would be the version bumped by `nx version` and read from the package.jsons?)
- the `nx release changelog` is composed of too many steps: generate changelogs, commit,
  tag, push, create github releases (if configured in `nx.json`)
- can't be customized to add assets to the release

#### nx publish

- this is actually the most useful command, as it allows to publish all
subprojects and override the default publish command by adding
`nx-release-publish` to `project.json`

::: info
this runs the command on every project even if `private: true` is set.

If it's an npm project running the default `[p]npm publish` command, it will
ignore the package.
:::

_e.g._
```json
{
  "name": "smispi",
  "$schema": "../../node_modules/nx/schemas/project-schema.json",
  "root": "libs/smispi",
  "projectType": "library",
  "targets": {
    "nx-release-publish": {
      "command": "./gradlew :libs:smispi:publishAndReleaseToMavenCentral --no-configuration-cache"
    }
  }
}

```
