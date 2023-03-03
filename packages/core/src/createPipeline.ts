import { signale } from 'signales'
import { objectEntries } from './utils/objectEntries'
import { formatContract } from './utils/formatContract'
import type { ContractItemType, ContractType, FormattedContractType } from './types'

export const createPipeline = (
  contracts: ContractType[]
): Record<keyof FormattedContractType, ContractItemType> => {
  const init = {
    bootstrap: [],
    teardown: [],
    bootstrapAll: [],
    teardownAll: [],
  }

  const mergedContract = contracts.reduce(
    (acc: FormattedContractType, contract: ContractType) => {
      for (const [key, value] of objectEntries(formatContract(contract))) {
        acc[key].push(...value)
      }

      return acc
    }, init)

  return objectEntries(mergedContract).reduce((acc, [name, callbacks]) => {
    acc[name] = async (): Promise<void> => {
      const que = callbacks.reduce((prev, next) => prev.then(next), Promise.resolve())

      try {
        await que
      } catch (error) {
        signale.fatal(error)
        process.exit(1)
      }
    }

    return acc
  }, {} as Record<keyof FormattedContractType, ContractItemType>)
}
