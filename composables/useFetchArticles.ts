import type { StoryblokStory } from 'storyblok-generate-ts'
import type { ArticleStoryblok } from '~/component-types-sb'

export function useFetchArticles(filterQuery: Record<string, any> = {}) {
  const articles = ref<StoryblokStory<ArticleStoryblok>[] | null>(null)

  async function fetchArticles() {
    const storyblokApi = useStoryblokApi()
    const storyVersion = getStoryVersion()

    const resolveRelations = [
      'article.category',
    ]

    const hasFilterQuery = Object.keys(filterQuery).length > 0

    try {
      const { data } = await storyblokApi.get('cdn/stories', {
        version: storyVersion,
        resolve_relations: resolveRelations,
        starts_with: 'blog',
        is_startpage: false,
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
