# Other tools

List of other tools used in the project.

>It's my personal opinion to use every tool available that can help standardize
the codebase and improve code quality.
>
>While it may seem a bit daunting at first, (many tools, strict rules) this is aimed at reducing developers cognitive load.
>
> Once the tools are setup, the developer can focus on writing code and let the tools handle the rest: formatting, default styles and linting.
>
> No more fighting about code style.

### [pre-commit](https://jamiemason.github.io/syncpack/guide/getting-started/)

Add hooks to the git repository to run linters, formatters, nx commands and
other scripts before every phase.

### [syncpack](https://jamiemason.github.io/syncpack/guide/getting-started/)

keep package.jsons in sync across multiple projects and organized.

### [commitlint](https://commitlint.js.org/)

ensure commits are following the conventional commit format.
Attached to pre-commit hook.

### [cz-git](https://cz-git.qbb.sh/guide/)

provide an easy to use CLI interface to create conventional commits.

### Linters / formatters

**java**
- [spotless](https://github.com/diffplug/spotless)
- [openrewrite](https://docs.openrewrite.org/)
- checkstyle
- google-java-format

**ts**
- prettier
- eslint
- [biome](https://biomejs.dev/) (experimental, hopefully can replace eslint +
prettier in 2025)

**css/scss**
- [stylelint](https://stylelint.io/)

**html**
- [htmlhint](https://github.com/htmlhint/HTMLHint)
- [htmlvalidate](https://html-validate.org/usage/)

_note: [vscode extension](https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools) and browser `microsoft-edge` have builtin functionalities to provide additional lints and suggestions for accessibility_

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
