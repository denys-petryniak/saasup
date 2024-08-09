import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

export function useBodyScrollLock(target: Ref<HTMLElement | null>, visible: Ref<boolean> | boolean) {
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
