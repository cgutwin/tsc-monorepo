# tsc-monorepo

This repository makes use of [Yarn zero-installs](https://yarnpkg.com/features/zero-installs), just clone and run.

Included are two example packages to build off: `@tsc-monorepo/pkg-01` and `@tsc-monorepo/pkg-02`. `pkg-02` is
 dependent on `pkg-01`.

### Running Included Packages

I compile my Typescript into a relative `lib` folder, which is excluded in this repository.

`@tsc-monorepo/pkg-02` is the productive package. To start it, run `yarn typescript`, then `yarn pkg02 node lib`.

### Local Dependency Typings

Local dependency typings are made available through Typescript references in the root `tsconfig.json` file.
Package names in the respective `package.json` need to match the folder name it's contained in. \
\
Ex. The package name is @tsc-monorepo/pkg01, then the name of the folder for it will be pkg01.

### Other Notes

Lerna link issues when resolving `workspace: ` defined dependencies: \
[feat: Support the \`workspace:` protocol #2450](https://github.com/lerna/lerna/pull/2450).

### License

MIT
