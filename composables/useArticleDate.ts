export function useArticleDate(date: string | Ref<string> | Date, locale: string | Ref<string> = 'en-US') {
  const resolvedLocale = toValue(locale)

  const dateFormatter = computed(() => {
    return resolvedLocale === 'en' ? 'MMMM DD, YYYY' : 'DD MMMM, YYYY'
  })

  const formattedArticleDate = useDateFormat(toValue(date), dateFormatter, {
    locales: resolvedLocale,
  })

  return {
    formattedArticleDate,
  }
}
