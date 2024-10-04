import type { MultilinkStoryblok } from '~/component-types-sb'
import type { LinkType } from '~/types'

export function resolveLinkUrl(link: MultilinkStoryblok, customLinkType?: LinkType): string {
  const { email, url, linktype } = link

  if (email && isEmailLink(linktype ?? '', customLinkType)) {
    return `mailto:${email}`
  }

  if (url && customLinkType === 'phone') {
    return `tel:${url}`
  }

  return url || ''
}

function isEmailLink(linktype: string, customLinkType?: string): boolean {
  return linktype === 'email' || customLinkType === 'email'
}
