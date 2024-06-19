export default function convertPxToRem(px: number): string {
  const baseFontSize = 16 // Default base font size in browsers

  return `${px / baseFontSize}rem`
}
