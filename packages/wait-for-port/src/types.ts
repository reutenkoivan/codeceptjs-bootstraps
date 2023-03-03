export type WaitForPortContractType = {
  bootstrap: () => Promise<void>;
}

export type WaitForPortOptionsType = {
  port: number;
  host?: string; // Defaults to 'localhost'
  interval?: number; // Defaults to 1000
  timeout?: number; // Defaults to 60 * 1000
}
