## [@codeceptjs-bootstraps/wait-for-port](https://reutenkoivan.github.io/codeceptjs-bootstraps/) [![Made in Ukraine](https://img.shields.io/badge/made_in-ukraine-ffd700.svg?labelColor=0057b7)](https://stand-with-ukraine.pp.ua)

<p>
  <a href="https://www.npmjs.com/package/@codeceptjs-bootstraps/wait-for-port"><img src="https://img.shields.io/npm/v/@codeceptjs-bootstraps/wait-for-port.svg?style=flat" alt="npm version"></a>
  <a href="#license"><img src="https://img.shields.io/github/license/sourcerer-io/hall-of-fame.svg?colorB=ff0000"></a>
</p>

This package contains a bootstrap for waiting for a port to be available.

## Installation

```bash
npm add -D @codeceptjs-bootstraps/wait-for-port
```

```bash
yarn add -D @codeceptjs-bootstraps/wait-for-port
```

## Usage

```typescript title="codecept.config.js"
const { waitForPortBootstrap } = require('@codeceptjs-bootstraps/wait-for-port')

exports.config = {
  ...waitForPortBootstrap({
    port: 3001, // port to wait for
  })
}
```
