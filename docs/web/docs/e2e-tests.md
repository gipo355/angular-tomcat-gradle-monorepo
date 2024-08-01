# E2E tests and vuln tests

Following NX guidelines, each project that requires e2e tests should have a
relative e2e project.

_e.g._
`jakarta-base-rest` project should have a `jakarta-base-rest-e2e` project.

## Backend

The e2e project must have a shareable setup script to prepare and launch a replicable
"closest to prod" environment.

On this environment we can launch:
- e2e tests
- vuln tests

with jest, mocha, tap, vitest, or any other test runner.

::: tip
some tools for testing:

- [testcontainers](https://testcontainers.com/)
- [docker-compose](https://github.com/PDMLab/docker-compose)
- [undici](https://github.com/nodejs/undici)
:::

A dev setup from the base project can be used.

This example is from `jakarta-base-rest-e2e`:
the task builds the dependency `jakarta-base-rest` and then runs the e2e tests.
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
    "vuln": {
      "executor": "nx:run-commands",
      "options": {
        "command": "echo 'todo'"
      }
    }
  }
}
```

The setup script in `global-setup`:
```ts
// note: the cwd is {workspaceRoot}
const composeConfig = {
  config: [
    'libs/jakarta-base-rest/compose.dev.yml',
  ],
  log: true,
};

await compose.upAll(composeConfig);
```



## Frontend

Nx by default creates the e2e project for the frontend with either cypress of
playwright.


## Notes

Following the principle of having the same idiomatic names for tasks, a simple
`nx run-many -t e2e` can run all the integration tests for all the projects.

```
the vuln task should be separated from the e2e task
```
