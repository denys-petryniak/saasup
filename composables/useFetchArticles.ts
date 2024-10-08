import type { ArticleStoryblokWithRelations } from '~/types'

export function useFetchArticles(filterQuery: Record<string, any> = {}) {
  const articles = ref<ArticleStoryblokWithRelations | null>(null)

  const storyblokApi = useStoryblokApi()
  const storyVersion = getStoryVersion()
  const { locale } = useI18n()

  const resolveRelations = [
    'article.category',
  ]

  const hasFilterQuery = Object.keys(filterQuery).length > 0

  async function fetchArticles() {
    try {
      const { data } = await storyblokApi.get('cdn/stories', {
        version: storyVersion,
        language: locale.value,
        resolve_relations: resolveRelations,
        starts_with: 'blog',
        is_startpage: false,
        // Excluding specific fields from the response to optimize performance
        // This helps in reducing the size of the API response, which is especially useful for preview cards (like article cards here)
        // Note: The fields are removed from the content within each story, not from the story object itself in Storyblok
        excluding_fields: 'body,authors',
        ...(hasFilterQuery ? { filter_query: filterQuery } : null),
      })

      articles.value = data.stories
    }
    catch (error) {
      console.error('Error fetching articles:', error)
    }
  }

  return {
    articles,
    fetchArticles,
  }
}
