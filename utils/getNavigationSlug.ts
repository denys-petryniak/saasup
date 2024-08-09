import type { LinkStoryblok } from '~/component-types-sb'

export default function (item: LinkStoryblok): string {
  const story = item.link.story
  const slug = story?.slug || ''

  if (!slug || slug === 'home') {
    return '/'
  }

  if (!slug.startsWith('/')) {
    return `/${slug}`
  }

  return slug
}
