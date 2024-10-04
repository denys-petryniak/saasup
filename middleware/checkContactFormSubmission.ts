export default defineNuxtRouteMiddleware((to) => {
  const isContactFormSubmitted = useIsContactFormSubmitted()

  if (!isContactFormSubmitted.value && to.path === '/success') {
    return navigateTo('/contacts')
  }
})
