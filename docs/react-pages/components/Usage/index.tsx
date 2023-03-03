import React from 'react'
// @ts-ignore
import CodeBlock from "@theme/CodeBlock";
// @ts-ignore
import styles from './usage.module.css'

const codePipeline = `
const path = require('path')
const { createPipeline } = require('@codeceptjs-bootstraps/core')
const { hostStatic } = require('@codeceptjs-bootstraps/host-static')
const { waitForPort } = require('@codeceptjs-bootstraps/wait-for-port')

const bootstraps = createPipeline([
  hostStatic({
    path: path.resolve('public') // path to your static files
  }),
  waitForPort({
    port: 3001
  })
])

/* codecept.config.js */
exports.config = {
  ...bootstraps,
  /* ... */
}
`.trim()

const codeAtomicUsage = `
const { waitForPort } = require('@codeceptjs-bootstraps/wait-for-port')

/* codecept.config.js */
exports.config = {
  ...waitForPort({
    port: 3001
  }),
  /* ... */
}
`.trim()

export const UsageExample = () => {
  return (
    <>
      <div className={styles.registerPipelineContainer}>
        <CodeBlock language={'typescript'} title={'Stand-alone usage.'} children={codeAtomicUsage}/>
      </div>
      <div className={styles.registerPipelineContainer}>
        <CodeBlock language={'typescript'} title={'Create a pipeline of bootstraps.'} children={codePipeline}/>
      </div>
    </>
  )
}
