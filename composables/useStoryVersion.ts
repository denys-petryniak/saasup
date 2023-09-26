import type { StoryVersion } from '~/types'

export function useStoryVersion(): { version: StoryVersion } {
  const route = useRoute()
  const query = route.query

  return {
    version: query._storyblok ? 'draft' : 'published',
  }
}
