import type { StoryVersion } from '~/types'

export default function (): StoryVersion {
  const isProduction = useRuntimeConfig().public.NODE_ENV === 'production'

  return isProduction ? 'published' : 'draft'
}
