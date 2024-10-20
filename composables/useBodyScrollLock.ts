import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

export function useBodyScrollLock(target: Ref<HTMLElement | null>, visible: Ref<boolean> | boolean) {
  // Note: target element is the one we would like to allow scroll on (NOT a parent of that element)
  watchEffect(() => {
    if (toValue(visible) && target.value) {
      disableBodyScroll(target.value)
    }
    else if (!toValue(visible) && target.value) {
      enableBodyScroll(target.value)
    }
    else {
      clearAllBodyScrollLocks()
    }
  })

  onBeforeUnmount(() => {
    clearAllBodyScrollLocks()
  })
}
