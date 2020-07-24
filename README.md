# tsc-monorepo

This repository makes use of [Yarn zero-installs](https://yarnpkg.com/features/zero-installs), just clone and run.

Included are two example packages to build off: `@tsc-monorepo/pkg-01` and `@tsc-monorepo/pkg-02`. `pkg-02` is
 dependent on `pkg-01`.

### Running Included Packages

I compile my Typescript into a relative `lib` folder, which is excluded in this repository.

`@tsc-monorepo/pkg-02` is the productive package. To start it, run `yarn typescript`, then `yarn pkg02 node lib`.

### Local Dependency Typings

Local dependency typings are present, yet not currently accessible in-editor due to issues with Lerna resolving 
`workspace:` dependency resolutions in workspace `package.json` files.

See [feat: Support the \`workspace:` protocol #2450](https://github.com/lerna/lerna/pull/2450).

Once Lerna supports `file:` resolutions, running `lerna link` will make typings accessible in-editor. 

Resolutions and use of dependencies in other packages will still work.

In addition, running Lerna commands with linked packages will throw the same error complaining about the 
`workspace:` resolution. Until then, yarn workspace tools is available to run `yarn workspaces foreach`.

### License

MIT
