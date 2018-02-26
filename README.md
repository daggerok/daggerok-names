# open source project [![Build Status](https://travis-ci.org/daggerok/daggerok-names.svg?branch=master)](https://travis-ci.org/daggerok/daggerok-names)

1. run `npm init`
2. add LICENSE, README.md and CODE_OF_CONDUCT.md files
3. implement your library
4. add tess: `npm i mocha assert`
5. add linting: `npm eslint`, `./node_modules/.bin/eslint --init`
6. add CI: `touch .travis.yml`
7. add code coverage: `npm i nyc` <!-- `npm i codecov` see package.json -->
8. add git hook (prepush) to do not brake anything: `npm i husky` (ignoe them with: `git push ... --no-verify`)
9. configure file matters for the npm registry: `npm i pack`, see "files" in package.json file
10. share library: `npm version`, `npm login`, `npm publish`
