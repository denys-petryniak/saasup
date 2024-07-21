export function useArticleDate(date: string | Ref<string> | Date) {
  const dateFormatter = ref('MMMM DD, YYYY')
  const formattedArticleDate = useDateFormat(toValue(date), dateFormatter, {
    locales: 'en-US',
  })

  return {
    formattedArticleDate,
  }
}
