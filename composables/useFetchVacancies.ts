import type { StoryblokStory } from 'storyblok-generate-ts'
import type { VacancyStoryblok } from '~/component-types-sb'

export function useFetchVacancies(filterQuery: Record<string, any> = {}) {
  const storyblokApi = useStoryblokApi()
  const storyVersion = getStoryVersion()
  const { locale } = useI18n()

  const hasFilterQuery = Object.keys(filterQuery).length > 0

  async function fetchVacancies() {
    const asyncKey = `vacancies-${locale.value}-${storyVersion}-${JSON.stringify(filterQuery)}`

    const { data: vacancies, error } = await useAsyncData<StoryblokStory<VacancyStoryblok>[]>(
      asyncKey,
      async () => {
        try {
          const { data } = await storyblokApi.get('cdn/stories', {
            version: storyVersion,
            language: locale.value,
            starts_with: 'careers',
            is_startpage: false,
            excluding_fields: 'body,content',
            ...(hasFilterQuery ? { filter_query: filterQuery } : null),
          })

          return data.stories
        }
        catch (err) {
          console.error('Error fetching vacancies:', err)
          throw err
        }
      },
    )

    return {
      vacancies,
      error,
    }
  }

  return {
    fetchVacancies,
  }
}
