# NX

Some info about NX in this project.

## Configuration

In the root `nx.json`, added base caching for common tasks

```json
"targetDefaults": {
  "lint": {
    "cache": true
  },
  "fix": {
    "cache": true
  },
  "test": {
    "cache": true
  },
  "build": {
    "cache": true
  },
  ...
}
```

## Common Tasks

In order to allow running common tasks across all the projects in the repo like
`nx run-many -t lint` every project must provide a task from its `project.json`
file.

Some tasks are implicit:

- task `test` is automatically provided by the `@nrwl/jest` plugin if a project has a `jest.config`` file in it
- gradle tasks are automatically provided by the `@nx/gradle` plugin

As with every other task, we can override the base command or provide it if it's not present.

```json
{
  "name": "smispi",
  "$schema": "../../node_modules/nx/schemas/project-schema.json",
  "root": "libs/smispi",
  "projectType": "library",
  "targets": {
    "lint": {
      "executor": "nx:run-commands",
      "options": {
        "command": "./gradlew :libs:smispi:check"
      }
    },
    "fix": {
      "executor": "nx:run-commands",
      "options": {
        "command": "./gradlew :libs:smispi:fix"
      }
    },
  }
}
```

## Cache

Further caching improvements can be made by modifying the `nx.json` file or
specifying additional configs to `project.json` files.

## Depends on and implicit dependencies

The `dependsOn` property in the `project.json` file allows us to specify which
other commands must be run before a specific task is executed.

```json
{
  "name": "jakarta-base-rest",
  "$schema": "../../node_modules/nx/schemas/project-schema.json",
  "root": "libs/jakarta-base-rest",
  "projectType": "library",
  "targets": {
    "prepare-env": {
      "executor": "nx:run-commands",
      "options": {
        "command": "mkdir -p dist/libs/jakarta-base-rest"
      }
    },
    "build": {
      "dependsOn": ["prepare-env"],
      "executor": "nx:run-commands",
      "options": {
        "command": "./gradlew :libs:jakarta-base-rest:buildWar && cp libs/jakarta-base-rest/build/libs/jakarta-base-rest.war dist/libs/jakarta-base-rest/"
      }
    },
  }
}
```

---
::: tip
`dependsOn` can be a task from another project in the repo.
:::
```json
{
  "name": "jakarta-base-rest-e2e",
  "$schema": "../../node_modules/nx/schemas/project-schema.json",
  "root": "libs/jakarta-base-rest-e2e",
  "implicitDependencies": ["jakarta-base-rest"],
  "projectType": "library",
  "targets": {
    "e2e": {
      "executor": "@nx/jest:jest",
      "outputs": ["{workspaceRoot}/coverage/{e2eProjectRoot}"],
      "options": {
        "jestConfig": "libs/jakarta-base-rest-e2e/jest.config.ts",
        "passWithNoTests": true
      },
      "dependsOn": ["jakarta-base-rest:build"]
    },
  }
}
```
---

The `implicitDependencies` property in the `project.json` file allows us to specify manually which project is linked as a dependency to the current target.

This allows `nx affected` to work correctly.

```json
{
  "name": "jakarta-base-rest-e2e",
  "$schema": "../../node_modules/nx/schemas/project-schema.json",
  "root": "libs/jakarta-base-rest-e2e",
  "implicitDependencies": ["jakarta-base-rest"],
  "projectType": "library",
  "targets": {
   ...
  }
}
```

## Release

Nx, as reported in the documentation, provides 3 commands to release a project:

- `nx release version`
- `nx release changelog`
- `nx release publish`

and a fourth command to automate the whole process:

- `nx release`

The configuration for the release is in the `nx.json` file:

```json
  "release": {
    "projects": ["*", "!*-e2e", "root"],
    "version": {
      "conventionalCommits": true
    },
    "changelog": {
      "workspaceChangelog": {
        "file": false,
        "createRelease": "github"
      },
      "projectChangelogs": {
        "renderOptions": {
          "authors": true,
          "commitReferences": true,
          "versionTitleDate": true
        }
      }
    }
  }
```
**`nx release publish`** has as default behavior `npm publish` for all the
projects in the repo with a package.json file containing `private: false`.

we can override this behavior in the project `project.json` file:

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
