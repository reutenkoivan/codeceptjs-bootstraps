---
title: createPipeline
---

:::info TL;DR
Creates a pipeline of bootstraps and returns an object with the **bootstrap**, **teardown**, **bootstrapAll** and **teardownAll** methods.
:::

```typescript
interface Bootstrap {
  bootstrap?: () => Promise<void> | void
  teardown?: () => Promise<void> | void
  bootstrapAll?: () => Promise<void> | void
  teardownAll?: () => Promise<void> | void
}

type CreatePipelineType = (botstraps: Bootstrap[]) => {
  bootstrap: () => Promise<void>
  teardown: () => Promise<void>
  bootstrapAll: () => Promise<void>
  teardownAll: () => Promise<void>
}
```

## Usage

:::tip
**The createPipeline function undertakes responsibility for a run next bootstrap only after the previous one!**
:::

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
