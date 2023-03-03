import waitPort from 'wait-port'
import { WaitForPortContractType, WaitForPortOptionsType } from './types'

export const waitForPortBootstrap = ({
  port,
  host = 'localhost',
  interval = 1000,
  timeout = 60 * 1000,
}: WaitForPortOptionsType): WaitForPortContractType => {
  return {
    bootstrap: async (): Promise<void> => {
      await waitPort({ host, port, interval, timeout })
    },
  }
}
