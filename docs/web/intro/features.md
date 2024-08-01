# features

## NX

### Cache

Nx caches results of operations to avoid recomputation. Nx can detect when operations are safe to skip and only execute the necessary tasks. This can save a lot of time when you are working on a large project.

### Affected Commands

Nx can determine which projects are affected by changes. This allows you to only build, test, or lint the projects that are affected by the changes you made.

_Example_
```bash
nx affected -t build --base=origin/main
```

### Dependency Graph

See in a visual way how your projects depend on each other.

### Run Many

Nx can run multiple commands in parallel.
If we standardize the name of the commands for all subprojects across multi
languages, we can run them all at once.

_Example_
```bash
nx run-many -t build lint test e2e vuln
```

### Schematics

Build custom executors and generators to automate repetitive tasks like
scaffolding a new project or adding a new library (both java + angular).

## Gradle / Java

### Dependency Management

Keep all versions, dependencies and configurations in one place at the root of the project.

Use multi-module projects to hot-link the projects together.

Use gradle builtint cache to share dependencies between projects and prevent downloading the same dependencies multiple times.

### Compose

Compose tomcat apps by bundling together war files into docker containers.

## Release, Versioning and Publish

::: warning
Not finished
:::

Automate the versioning of the projects and generate changelogs for each.

Automate the publishing of the projects for both java and angular libs

Track different channels of releases (alpha, beta, rc, next, etc)

Use tools like [changesets](https://github.com/changesets/changesets) to automate the versioning and changelog generation.

Use [nx-release](https://nx.dev/features/manage-releases) to automate the release process and publish to a different registry for each language.

## Docs

### Consumer-friendly
Build beautiful docs like this one for each project in the monorepo _(powered by vitepress)_.

### Developer-friendly
Allow developers to contribute to the docs easily by writing markdown files, code snippets, examples and tutorials for their libraries.

## Security

::: warning
Not implemented yet
:::

### Scanning
Automate the scanning of the projects for vulnerabilities and generate reports.

### Reports

Generate reports and publish them wherever you want (possibly sending emails or
adding them to github code security)

## CI/CD

### GitHub Actions

Use github actions to automate the build, test, lint and anything else you may
need, including the versioning and release process!
