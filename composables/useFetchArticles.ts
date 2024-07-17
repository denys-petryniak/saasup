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

    try {
      const { data } = await storyblokApi.get('cdn/stories', {
        version: storyVersion,
        resolve_relations: resolveRelations,
        starts_with: 'blog',
        is_startpage: false,
        filter_query: filterQuery,
      })

      articles.value = data.stories
    }
    catch (error) {
      console.error('Error fetching articles:', error)
    }
  }

  fetchArticles()

  return {
    articles,
    fetchArticles,
  }
}
