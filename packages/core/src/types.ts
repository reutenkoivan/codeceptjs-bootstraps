export type ContractItemType = () => void | Promise<void>

export type ContractType = {
  bootstrap?: ContractItemType | ContractItemType[];
  teardown?: ContractItemType | ContractItemType[];
  bootstrapAll?: ContractItemType | ContractItemType[];
  teardownAll?: ContractItemType | ContractItemType[];
}

export type FormattedContractType = Required<Record<keyof ContractType, ContractItemType[]>>
