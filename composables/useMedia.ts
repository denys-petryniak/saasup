import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

export function useMedia() {
  const breakpoints = useBreakpoints(breakpointsTailwind)

  const isMobile = breakpoints.smaller('sm') // 0 - 639px
  const isTablet = breakpoints.between('sm', 'lg') // 640px - 1023px
  const isLaptop = breakpoints.between('lg', 'xl') // 1024px - 1279px
  const isDesktop = breakpoints.greaterOrEqual('xl') // 1280px - infinity

  return {
    isMobile,
    isTablet,
    isLaptop,
    isDesktop,
  }
}
