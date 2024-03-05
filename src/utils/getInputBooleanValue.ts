export function getInputBooleanValue(event: Event): boolean | undefined {
  const checked = (event.target as HTMLInputElement).checked
  return checked
}
