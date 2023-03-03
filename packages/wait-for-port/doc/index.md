---
title: wait-for-port
sidebar_label: Details
slug: /
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

:::info TL;DR
Provides a bootstrap for waiting for a port to be available.
:::

## Installation
<Tabs groupId="package-manager">
<TabItem value="npm">

```shell
npm add -D @codeceptjs-bootstraps/wait-for-port
```

</TabItem>
<TabItem value="yarn">

```shell
yarn add -D @codeceptjs-bootstraps/wait-for-port
```

</TabItem>
</Tabs>

## Basic usage

```typescript
const { waitForPortBootstrap } = require('@codeceptjs-bootstraps/wait-for-port')

exports.config = {
  ...waitForPortBootstrap({
    port: 3001, // port to wait for
  })
}
```

## Configuration

```typescript
interface WaitForPortOptionsType {
  port: number;
  host?: string;     // Defaults to 'localhost'
  interval?: number; // Defaults to 1000ms (1 second)
  timeout?: number;  // Defaults to 60 * 1000ms (1 minute)
}
```
