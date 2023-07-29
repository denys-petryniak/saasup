import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

export function useMedia() {
  const breakpoints = useBreakpoints(breakpointsTailwind)

  const isMobileScreenSize = breakpoints.smaller('sm') // 0 - 639px
  const isTabletScreenSize = breakpoints.between('sm', 'lg') // 640px - 1023px
  const isLaptopScreenSize = breakpoints.between('lg', 'xl') // 1024px - 1279px
  const isDesktopScreenSize = breakpoints.greaterOrEqual('xl') // 1280px - infinity

  return {
    isMobileScreenSize,
    isTabletScreenSize,
    isLaptopScreenSize,
    isDesktopScreenSize,
  }
}
