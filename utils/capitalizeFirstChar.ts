export function capitalizeFirstChar(str: string | null | undefined): string {
  if (!str)
    return ''

  return str.charAt(0).toUpperCase() + str.slice(1)
}
