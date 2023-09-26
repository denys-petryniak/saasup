import type {
  AssetStoryblok,
  ButtonStoryblok,
  LinkStoryblok,
  SubmenuStoryblok,
} from '~/component-types-sb'

export type ImageLoading = 'lazy' | 'eager'

export type BadgeSize = 'regular' | 'small'
export type BadgeColor = 'purple' | 'white' | 'orange'

export type ButtonWidth = 'full'
export type ButtonSize = 'small' | 'medium'
export type ButtonColor = 'branded' | 'light' | 'light-branded' | 'light-bordered' | 'dark' | 'dark-branded'

export type SectionTag = 'div' | 'section' | 'article'

export type StoryVersion = 'draft' | 'published'

export interface HeaderData {
  navigation: (LinkStoryblok | SubmenuStoryblok)[] | null
  logo: AssetStoryblok | undefined
}

export interface FooterData {
  headline: string | null
  description: string | null
  copyright: string | null
  navigation: (LinkStoryblok)[] | null
  emails: LinkStoryblok[] | null
  phones: LinkStoryblok[] | null
  socialLinks: LinkStoryblok[] | null
  widgetLabel: string | null
  widgetTitle: string | null
  widgetDescription: string | null
  widgetButtons: ButtonStoryblok[] | null
}
