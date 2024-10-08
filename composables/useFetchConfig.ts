import type { ConfigStoryblok } from '~/component-types-sb'

export function useFetchConfig() {
  const config = ref<ConfigStoryblok | null>(null)

  const storyblokApi = useStoryblokApi()
  const storyVersion = getStoryVersion()
  const { locale } = useI18n()

  async function fetchConfig() {
    try {
      const { data } = await storyblokApi.get('cdn/stories/config', {
        version: storyVersion,
        language: locale.value,
        resolve_links: 'url',
      })

      config.value = data.story.content
    }
    catch (error) {
      console.error('Error fetching config:', error)
    }
  }

  return {
    config,
    fetchConfig,
  }
}
