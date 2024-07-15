import{_ as e,c as a,o as t,a5 as s}from"./chunks/framework.BGfKG4OG.js";const b=JSON.parse('{"title":"features","description":"","frontmatter":{},"headers":[],"relativePath":"intro/features.md","filePath":"intro/features.md"}'),n={name:"intro/features.md"},i=s('<h1 id="features" tabindex="-1">features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;features&quot;">​</a></h1><h2 id="nx" tabindex="-1">NX <a class="header-anchor" href="#nx" aria-label="Permalink to &quot;NX&quot;">​</a></h2><h3 id="cache" tabindex="-1">Cache <a class="header-anchor" href="#cache" aria-label="Permalink to &quot;Cache&quot;">​</a></h3><p>Nx caches results of operations to avoid recomputation. Nx can detect when operations are safe to skip and only execute the necessary tasks. This can save a lot of time when you are working on a large project.</p><h3 id="affected-commands" tabindex="-1">Affected Commands <a class="header-anchor" href="#affected-commands" aria-label="Permalink to &quot;Affected Commands&quot;">​</a></h3><p>Nx can determine which projects are affected by changes. This allows you to only build, test, or lint the projects that are affected by the changes you made.</p><p><em>Example</em></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> affected</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --base=origin/main</span></span></code></pre></div><h3 id="dependency-graph" tabindex="-1">Dependency Graph <a class="header-anchor" href="#dependency-graph" aria-label="Permalink to &quot;Dependency Graph&quot;">​</a></h3><p>See in a visual way how your projects depend on each other.</p><h3 id="run-many" tabindex="-1">Run Many <a class="header-anchor" href="#run-many" aria-label="Permalink to &quot;Run Many&quot;">​</a></h3><p>Nx can run multiple commands in parallel. If we standardize the name of the commands for all subprojects across multi languages, we can run them all at once.</p><p><em>Example</em></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run-many</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lint</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> e2e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vuln</span></span></code></pre></div><h3 id="schematics" tabindex="-1">Schematics <a class="header-anchor" href="#schematics" aria-label="Permalink to &quot;Schematics&quot;">​</a></h3><p>Build custom executors and generators to automate repetitive tasks like scaffolding a new project or adding a new library (both java + angular).</p><h2 id="gradle-java" tabindex="-1">Gradle / Java <a class="header-anchor" href="#gradle-java" aria-label="Permalink to &quot;Gradle / Java&quot;">​</a></h2><h3 id="dependency-management" tabindex="-1">Dependency Management <a class="header-anchor" href="#dependency-management" aria-label="Permalink to &quot;Dependency Management&quot;">​</a></h3><p>Keep all versions, dependencies and configurations in one place at the root of the project.</p><p>Use multi-module projects to hot-link the projects together.</p><p>Use gradle builtint cache to share dependencies between projects and prevent downloading the same dependencies multiple times.</p><h3 id="compose" tabindex="-1">Compose <a class="header-anchor" href="#compose" aria-label="Permalink to &quot;Compose&quot;">​</a></h3><p>Compose tomcat apps by bundling together war files into docker containers.</p><h2 id="release-versioning-and-publish" tabindex="-1">Release, Versioning and Publish <a class="header-anchor" href="#release-versioning-and-publish" aria-label="Permalink to &quot;Release, Versioning and Publish&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Not finished</p></div><p>Automate the versioning of the projects and generate changelogs for each.</p><p>Automate the publishing of the projects for both java and angular libs</p><p>Track different channels of releases (alpha, beta, rc, next, etc)</p><p>Use tools like <a href="https://github.com/changesets/changesets" target="_blank" rel="noreferrer">changesets</a> to automate the versioning and changelog generation.</p><p>Use <a href="https://nx.dev/features/manage-releases" target="_blank" rel="noreferrer">nx-release</a> to automate the release process and publish to a different registry for each language.</p><h2 id="docs" tabindex="-1">Docs <a class="header-anchor" href="#docs" aria-label="Permalink to &quot;Docs&quot;">​</a></h2><h3 id="consumer-friendly" tabindex="-1">Consumer-friendly <a class="header-anchor" href="#consumer-friendly" aria-label="Permalink to &quot;Consumer-friendly&quot;">​</a></h3><p>Build beautiful docs like this one for each project in the monorepo <em>(powered by vitepress)</em>.</p><h3 id="developer-friendly" tabindex="-1">Developer-friendly <a class="header-anchor" href="#developer-friendly" aria-label="Permalink to &quot;Developer-friendly&quot;">​</a></h3><p>Allow developers to contribute to the docs easily by writing markdown files, code snippets, examples and tutorials for their libraries.</p><h2 id="security" tabindex="-1">Security <a class="header-anchor" href="#security" aria-label="Permalink to &quot;Security&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Not implemented yet</p></div><h3 id="scanning" tabindex="-1">Scanning <a class="header-anchor" href="#scanning" aria-label="Permalink to &quot;Scanning&quot;">​</a></h3><p>Automate the scanning of the projects for vulnerabilities and generate reports.</p><h3 id="reports" tabindex="-1">Reports <a class="header-anchor" href="#reports" aria-label="Permalink to &quot;Reports&quot;">​</a></h3><p>Generate reports and publish them wherever you want (possibly sending emails or adding them to github code security)</p><h2 id="ci-cd" tabindex="-1">CI/CD <a class="header-anchor" href="#ci-cd" aria-label="Permalink to &quot;CI/CD&quot;">​</a></h2><h3 id="github-actions" tabindex="-1">GitHub Actions <a class="header-anchor" href="#github-actions" aria-label="Permalink to &quot;GitHub Actions&quot;">​</a></h3><p>Use github actions to automate the build, test, lint and anything else you may need, including the versioning and release process!</p>',44),r=[i];function o(l,h,c,d,p,u){return t(),a("div",null,r)}const g=e(n,[["render",o]]);export{b as __pageData,g as default};