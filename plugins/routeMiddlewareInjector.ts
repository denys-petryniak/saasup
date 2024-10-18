export default defineNuxtPlugin(() => {
  const localePath = useLocalePath()
  const isContactFormSubmitted = useIsContactFormSubmitted()

  addRouteMiddleware((to) => {
    if (!isContactFormSubmitted.value && to.path === localePath('/success')) {
      return navigateTo(localePath('/contacts'))
    }
  })
})
