## [@codeceptjs-bootstraps/host-static](https://reutenkoivan.github.io/codeceptjs-bootstraps/) [![Made in Ukraine](https://img.shields.io/badge/made_in-ukraine-ffd700.svg?labelColor=0057b7)](https://stand-with-ukraine.pp.ua)

<p>
  <a href="https://www.npmjs.com/package/@codeceptjs-bootstraps/host-static"><img src="https://img.shields.io/npm/v/@codeceptjs-bootstraps/host-static.svg?style=flat" alt="npm version"></a>
  <a href="#license"><img src="https://img.shields.io/github/license/sourcerer-io/hall-of-fame.svg?colorB=ff0000"></a>
</p>

This package contains a bootstrap for hosting static files.

## Installation

```bash
npm add -D @codeceptjs-bootstraps/host-static
```

```bash
yarn add -D @codeceptjs-bootstraps/host-static
```

## Usage

```typescript title="codecept.config.js"
const path = require('path')
const { hostStaticBootstrap } = require('@codeceptjs-bootstraps/host-static')

exports.config = {
  ...hostStaticBootstrap({
    path: path.resolve('static'), // path to static files
  })
}
```
