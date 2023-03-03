---
title: host-static
sidebar_label: Details
slug: /
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

:::info TL;DR
Provides a bootstrap for hosting static files.
:::

## Installation
<Tabs groupId="package-manager">
<TabItem value="npm">

```shell
npm add -D @codeceptjs-bootstraps/host-static
```

</TabItem>
<TabItem value="yarn">

```shell
yarn add -D @codeceptjs-bootstraps/host-static
```

</TabItem>
</Tabs>

## Basic usage

```typescript
const path = require('path')
const { hostStaticBootstrap } = require('@codeceptjs-bootstraps/host-static')

exports.config = {
  ...hostStaticBootstrap({
    path: path.resolve('static'), // path to static files
  })
}
```

## Configuration

```typescript
interface HostStaticOptionsType {
  path: string;       // Path to static files
  enabled?: boolean;  // Default true
  port?: number;      // Default 3001
}
```
