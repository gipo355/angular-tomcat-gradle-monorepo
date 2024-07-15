# Releases

doc section about versioning, releases and publishing in nx

## changesets

## nx release

As anticipated in [nx](./nx.md#release), the release process is managed by the `nx release` command and is split in 3 commands or 1 that does it all.

While `nx version` and `nx changelog` are good, they lack some features and are
quite strict on customization options.

### **The problems**

#### nx version
- the command bumps version based on conventional commits if configured
- can enter pre-release mode
- requires manual versioning when switching off of `preid`, doesn't keep track
of stable version and doesn't reconcile it with the pre-release version
automatically

#### nx changelog

#### nx publish
