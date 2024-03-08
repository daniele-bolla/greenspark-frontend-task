export function devlog(...args: unknown[]): void {
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.log(...args)
  } else {
    return
  }
}
