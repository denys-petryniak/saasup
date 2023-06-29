import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

export function useMedia() {
  const breakpoints = useBreakpoints(breakpointsTailwind)

  const isMobile = breakpoints.smaller('sm') // 0 - 639px
  const isTablet = breakpoints.between('sm', 'md') // 640px - 767px
  const isLaptop = breakpoints.between('md', 'lg') // 768px - 1023px
  const isDesktop = breakpoints.greaterOrEqual('lg') // 1024px - infinity

  return {
    isMobile,
    isTablet,
    isLaptop,
    isDesktop,
  }
}
