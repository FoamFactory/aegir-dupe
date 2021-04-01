# aegir
The react component library for FoamFactory

## Workflow
We use [gitflow](https://nvie.com/posts/a-successful-git-branching-model/),
with some modifications made for our small-ish team.

An overview of our branches:
  - `<username>/TG-XXXX-feature-whatever>`: A branch created off of `develop`,
  or some other shared branch, that is being used by a single developer to
  actively develop a feature or bugfix.
  - `feature|hotfix/<description>`: A longer-term branch that will be shared by
  multiple developers. `develop` should be rebased/merged into this at least
  weekly to prevent bitrot. Developers can branch off of these branches to their
  own personal `<username>/XXX` branches if necessary, and merge into the longer
  running branch.
  - `develop`: Our main development/integration branch. This should _always_
  build, but it might have bugs in it. Anything merged into `develop` should be
  code reviewed in a PR _before_ being merged. Merge commits should contain the
  metadata line:
  ```
  [r=<username>]
  ```
  where `<username>` is the github username of the developer approving the
  review.
  - `main`: The "golden master" branch. The tip of this branch should _always_
  correspond to the most recent full release.
  - `release/X.Y.Z`: A release preparation branch. These branches should be
  branched off of _develop_ and merged into _develop_ after any changes.
  Additionally, once a release is actually created and solidified, the branch
  should be merged into `main` and removed.

## Release Process
### Development Releases
_development_ releases are created every time new commits are added to a pull
request. When this happens, a new release using the version number that is
specified in `package.json` is used, appended with `-devXX`, where `XX` is a
monotonically increasing number.

No additional actions are required by a developer to push development releases.

### Prereleases
_Prereleases_ are created when a merge into `develop` is pushed. When this
happens, a new release using the version number that is specified in
`package.json` is used, appended with `-prereleaseXX`, where `XX` is a
monotonically increasing number.

Currently, no additional steps are required at this point, except that a change
to the version number in `package.json` should be made at a convenient time,
when a new feature or bugfix is added to `develop` that necessitates a semantic
version modification.

### Release Candidates
_Release candidates_ are created when a branch starting with `releases/XXX` are
created. These release branches should be branched off of `develop` and merged
back into `main` at the time that the release should be solidified. Each push to
a release branch creates a new package deployment ending with `-rcXX`, where
`XX` is a monotonically increasing number.

No additional steps are required at this point. If modifications are made to the
release branch, the release branch should be merged back into `develop` to
maintain consistency with our live development branch.

### Production Releases
_Production releases_ are created when a **Release** is created in Github. This
will publish a new package with the version specified in `package.json`, with
the release created off of the `main` branch.

Prior to creating the production release, `release/X.Y.Z` should be merged into
`main`. Once a production release is created, the `release/X.Y.Z` branch can be
removed from both the developer's local machine and `origin`, although, leaving
the branch on `origin` is also acceptable.

Once the `release/X.Y.Z` branch is merged into `main` and `main` is pushed to
`origin`, a new release to Chromatic will be created. This release off of main
can be viewed online at `http://aegir.foamfactory.io`.

**Note**: `main` is _not_ the default branch in Github! The developer creating
the release must specify that it is coming from `main` and not `develop`.
