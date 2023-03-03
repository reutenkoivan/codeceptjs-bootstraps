import { ContractType, FormattedContractType } from '../types'
import { objectEntries } from './objectEntries'

export const formatContract = (contract: ContractType): FormattedContractType => {
  return objectEntries(contract).reduce((res, [key, value]) => {
    if (!value) {
      return  res
    }

    if (Array.isArray(value)) {
      res[key] = value
    } else {
      res[key] = [value]
    }

    return res
  }, {
    bootstrap: [],
    teardown: [],
    bootstrapAll: [],
    teardownAll: [],
  })
}
