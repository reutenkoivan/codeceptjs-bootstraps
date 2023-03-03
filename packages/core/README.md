## [@codeceptjs-bootstraps/core](https://reutenkoivan.github.io/codeceptjs-bootstraps/) [![Made in Ukraine](https://img.shields.io/badge/made_in-ukraine-ffd700.svg?labelColor=0057b7)](https://stand-with-ukraine.pp.ua)

<p>
  <a href="https://www.npmjs.com/package/@codeceptjs-bootstraps/core"><img src="https://img.shields.io/npm/v/@codeceptjs-bootstraps/core.svg?style=flat" alt="npm version"></a>
  <a href="#license"><img src="https://img.shields.io/github/license/sourcerer-io/hall-of-fame.svg?colorB=ff0000"></a>
</p>

This package contains core functionality for managing the CodeceptJS bootstraps.

## Installation

```bash
npm add -D @codeceptjs-bootstraps/core
```

```bash
yarn add -D @codeceptjs-bootstraps/core
```

## createPipeline
```typescript title="codecept.config.js"
import { createPipeline } from '@codeceptjs-bootstraps/core'

const firstBootstrap = {
  bootstrap: () => {
    console.log('bootstrap 1')
  },
  teardown: async () => {
    console.log('teardown 1')
  },
}

const secondBootstrap = {
  bootstrap: async () => {
    console.log('bootstrap 2')
  },
  bootstrapAll: () => {
    console.log('bootstrapAll 2')
  },
}

const pipeline = createPipeline([
  firstBootstrap,
  secondBootstrap,
])

exports.config = {
  ...pipeline
}
/*
Expected output:
1) bootstrapAll 2
2) bootstrap 1
3) bootstrap 2
4) teardown 1
*/
```
