# Other tools

List of other tools used in the project.

### pre-commit

todo

### syncpack

todo

### commitlint

todo

### Linters / formatters

**java**
- spotless
- rewrite

**ts**
- prettier
- eslint
- biome
- stylelint
- htmlhint
- htmlvalidate

### vitepress

serve with pnpm docs:dev

### pnpm

pnpm is used to speed up the installation of the dependencies and save time
in CI.

the file `{root}/pnpm-workspace.yaml` is used to define the packages.

::: tip
while pnpm workspaces is not required for nx to work, it's needed by some tools
like changesets which depend on it to provide intellisense when adding packages
:::
