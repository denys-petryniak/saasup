import type {
  AssetStoryblok,
  ButtonStoryblok,
  LinkStoryblok,
  SubmenuStoryblok,
} from '~/component-types-sb'

export type Theme = 'light' | 'dark'

export type Alignment = 'left' | 'center' | 'right'

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type ImageLoading = 'lazy' | 'eager'

export type BadgeSize = 'sm' | 'md'
export type BadgeColor = 'purple' | 'white' | 'orange'

export type ButtonWidth = 'full'
export type ButtonSize = 'sm' | 'md'
export type ButtonColor = 'branded' | 'light' | 'light-branded' | 'light-bordered' | 'dark' | 'dark-branded'

export type SectionTag = 'div' | 'section' | 'article'

export type StoryVersion = 'draft' | 'published'

export type ScreenSizeName = 'mobile' | 'tablet' | 'laptop' | 'desktop'
export type ColumnCount = '1' | '2' | '3' | '4'

export interface Header {
  navigation: (LinkStoryblok | SubmenuStoryblok)[]
  logo?: AssetStoryblok
}

interface FooterWidget {
  label: string
  title: string
  description: string
  buttons: ButtonStoryblok[]
}

export interface Footer {
  headline: string
  description: string
  copyright: string
  navigation: (LinkStoryblok)[]
  emails: LinkStoryblok[]
  phones: LinkStoryblok[]
  socialLinks: LinkStoryblok[]
  widget?: FooterWidget
}
