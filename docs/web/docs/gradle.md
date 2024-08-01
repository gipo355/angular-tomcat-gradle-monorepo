# Gradle

We are using the plugin [gradle-nx-plugin](https://nx.dev/nx-api/gradle)

This plugin allows us to run gradle tasks from the nx workspace and adds
projects to the `nx graph` command to visualize the dependencies between projects.

It automatically provides gradle tasks for each project in the workspace.

`nx run smispi:test` is equivalent to `./gradlew :libs:smispi:test` and
recognized by default.

:::tip
We can override the task in the `{projectRoot}/project.json` file like this:

```json
{
  "name": "smispi",
  "$schema": "../../node_modules/nx/schemas/project-schema.json",
  "root": "libs/smispi",
  "projectType": "library",
  "targets": {
    "test": {
      "executor": "nx:run-commands",
      "options": {
        "command": "./gradlew :libs:smispi:anotherTask"
      }
    }
  }
}
```
:::

::: warning
Possible bug or wrong implementation?

A fix task is provided for all subprojects running `spotlessApply`. This is not
available directly when running `nx run smispi:fix`.

The tasks created in the root `build.gradle` (applied from
`tasks.settings.gradle`) are not recognized directly.

This means the `fix` task must be provided in the `project.json` file of each
project meant to use it like this:

```json
{
  "name": "smispi",
  "$schema": "../../node_modules/nx/schemas/project-schema.json",
  "root": "libs/smispi",
  "projectType": "library",
  "targets": {
    "fix": {
      "executor": "nx:run-commands",
      "options": {
        "command": "./gradlew :libs:smispi:fix"
      }
    },
  }
}
```
:::

## Shared libraries

All dependencies and their versions are kept in a single `toml` file
under `{root}/gradle/libs.version.toml`.

This is a [default feature](https://docs.gradle.org/current/userguide/platforms.html#sub:conventional-dependencies-toml).

It allows us to create bundles of dependencies, "packaging" them to be used for
subprojects.

## Shared configs

All configs are applied from the root `build.gradle` file.

The main purposes are to avoid repetition, keep the configuration in one place
for control, keep subprojects configs lean.

## Tasks name conventions

All tasks should be standardized across all subprojects to follow nx
(preferrable default task names) idiomatic conventions.

This is to allow running common tasks across all the projects in the repo like
`nx run-many -t lint`.

For example, every project could expose those commands:
- `lint`
- `fix`
- `test`
- `build`
- `serve`
- `deploy`
- `clean`
- `publish`
- `release`
- `docs`
- `e2e`
- `coverage`
- `vuln`

Those tasks could be customized to fit the project needs.
