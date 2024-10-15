import type { ConfigStoryblok } from '~/component-types-sb'

export function useFetchConfig() {
  const storyblokApi = useStoryblokApi()
  const storyVersion = getStoryVersion()
  const { locale } = useI18n()

  async function fetchConfig() {
    const asyncKey = `config-${locale.value}-${storyVersion}`

    const { data: config, error } = await useAsyncData<ConfigStoryblok>(
      asyncKey,
      async () => {
        try {
          const { data } = await storyblokApi.get('cdn/stories/config', {
            version: storyVersion,
            language: locale.value,
            resolve_links: 'url',
          })
          return data.story.content
        }
        catch (err) {
          console.error('Error fetching config:', err)
          throw err
        }
      },
      {
        watch: [locale],
      },
    )

    return {
      config,
      error,
    }
  }

  return {
    fetchConfig,
  }
}
