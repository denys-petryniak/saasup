import type { StoryblokStory } from 'storyblok-generate-ts'
import type { PricingPlanStoryblok } from '~/component-types-sb'

export function useFetchPricingPlans(filterQuery: Record<string, any> = {}) {
  const pricingPlans = ref<StoryblokStory<PricingPlanStoryblok>[] | null>(null)

  const storyblokApi = useStoryblokApi()
  const storyVersion = getStoryVersion()
  const { locale } = useI18n()

  const hasFilterQuery = Object.keys(filterQuery).length > 0

  async function fetchPricingPlans() {
    try {
      const { data } = await storyblokApi.get('cdn/stories', {
        version: storyVersion,
        language: locale.value,
        starts_with: 'pricing',
        is_startpage: false,
        sort_by: 'content.price:asc:float',
        excluding_fields: 'body',
        ...(hasFilterQuery ? { filter_query: filterQuery } : null),
      })

      pricingPlans.value = data.stories
    }
    catch (error) {
      console.error('Error fetching pricing plans:', error)
    }
  }

  return {
    pricingPlans,
    fetchPricingPlans,
  }
}
