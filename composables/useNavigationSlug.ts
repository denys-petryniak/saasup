import type { LinkStoryblok } from '~/component-types-sb'

export function useNavigationSlug(navigationItem: LinkStoryblok): { slug: string } {
  const { slug: storySlug } = navigationItem.link.story

  if (!storySlug || storySlug === 'home') {
    return {
      slug: '/',
    }
  }

  return {
    slug: storySlug.startsWith('/') ? storySlug : `/${storySlug}`,
  }
}
