import type { StoryblokStory } from 'storyblok-generate-ts'
import type { VacancyStoryblok } from '~/component-types-sb'

export function useFetchVacancies(filterQuery: Record<string, any> = {}) {
  const vacancies = ref<StoryblokStory<VacancyStoryblok>[] | null>(null)

  async function fetchVacancies() {
    const storyblokApi = useStoryblokApi()
    const storyVersion = getStoryVersion()
    const { locale } = useI18n()

    const hasFilterQuery = Object.keys(filterQuery).length > 0

    try {
      const { data } = await storyblokApi.get('cdn/stories', {
        version: storyVersion,
        language: locale.value,
        starts_with: 'careers',
        is_startpage: false,
        excluding_fields: 'body,content',
        ...(hasFilterQuery ? { filter_query: filterQuery } : null),
      })

      vacancies.value = data.stories
    }
    catch (error) {
      console.error('Error fetching vacancies:', error)
    }
  }

  return {
    vacancies,
    fetchVacancies,
  }
}
