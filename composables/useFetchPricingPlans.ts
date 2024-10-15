import type { StoryblokStory } from 'storyblok-generate-ts'
import type { PricingPlanStoryblok } from '~/component-types-sb'

export function useFetchPricingPlans(filterQuery: Record<string, any> = {}) {
  const storyblokApi = useStoryblokApi()
  const storyVersion = getStoryVersion()
  const { locale } = useI18n()

  const hasFilterQuery = Object.keys(filterQuery).length > 0

  async function fetchPricingPlans() {
    const asyncKey = `pricing-plans-${locale.value}-${storyVersion}-${JSON.stringify(filterQuery)}`

    const { data: pricingPlans, error } = await useAsyncData<StoryblokStory<PricingPlanStoryblok>[]>(
      asyncKey,
      async () => {
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

          return data.stories
        }
        catch (err) {
          console.error('Error fetching pricing plans:', err)
          throw err
        }
      },
    )

    return {
      pricingPlans,
      error,
    }
  }

  return {
    fetchPricingPlans,
  }
}
