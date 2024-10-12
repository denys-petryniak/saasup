export default defineNuxtRouteMiddleware((to) => {
  const isContactFormSubmitted = useIsContactFormSubmitted()
  const localePath = useLocalePath()

  if (!isContactFormSubmitted.value && to.path === localePath('/success')) {
    return navigateTo(localePath('/contacts'))
  }
})
