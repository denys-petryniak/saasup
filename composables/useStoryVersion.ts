import type { StoryVersion } from '~/types'

export function useStoryVersion(): { version: StoryVersion } {
  const isProduction = useRuntimeConfig().public.NODE_ENV === 'production'

  const version = isProduction ? 'published' : 'draft'

  return {
    version,
  }
}
