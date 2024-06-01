import type { LinkStoryblok } from '~/component-types-sb'

export default function (item: LinkStoryblok): string {
  const { slug } = item.link.story

  if (!slug || slug === 'home') {
    return '/'
  }

  if (!slug.startsWith('/')) {
    return `/${slug}`
  }

  return slug
}
