export default function prependLeadingSlash(value: string): string {
  if (value.startsWith('/')) {
    return value
  }

  return `/${value}`
}
