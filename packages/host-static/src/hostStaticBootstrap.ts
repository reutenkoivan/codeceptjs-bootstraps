import { IncomingMessage, ServerResponse, createServer, Server } from 'http'
import Static from 'node-static'
import { HostStaticOptionsType } from './types'

const HOST_STATIC_RUN_MULTIPLE_KEY = 'HOST_STATIC_RUN_MULTIPLE_KEY'

export const hostStaticBootstrap = ({
    path,
    enabled = true,
    port = 3001,
  }: HostStaticOptionsType
) => {
  const folder = new Static.Server(path)
  let server: Server

  const serveStatic = (): void => {
    if (!enabled) {
      return
    }

    server = createServer((request: IncomingMessage, response: ServerResponse) => {
      request
        .addListener('end', () => {
          folder.serve(request, response)
        })
        .resume()
    })
      .listen(port)
  }

  const killServer = (): void => {
    if (server) {
      server.close()
    }
  }

  ['SIGINT', 'SIGTERM', 'SIGQUIT']
    .forEach(signal => process.on(signal, killServer))

  return {
    bootstrap: (): void => {
      if (process.env[HOST_STATIC_RUN_MULTIPLE_KEY]) {
        return
      }

      serveStatic()
    },
    teardown: (): void => {
      if (process.env[HOST_STATIC_RUN_MULTIPLE_KEY]) {
        return
      }

      killServer()
    },
    bootstrapAll: (): void => {
      process.env[HOST_STATIC_RUN_MULTIPLE_KEY] = '1'

      serveStatic()
    },
    teardownAll: killServer,
  }
}
