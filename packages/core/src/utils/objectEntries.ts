// eslint-disable-next-line max-len
export const objectEntries = Object.entries as <T>(_: T) => T extends ArrayLike<infer U> ? [string, U][] : { [K in keyof T]: [K, T[K]] }[keyof T][]
