import type { StoryblokStory } from 'storyblok-generate-ts'
import type {
  ArticlesSectionStoryblok,
  ArticleStoryblok,
  AssetStoryblok,
  AuthorStoryblok,
  ButtonStoryblok,
  CareersSectionStoryblok,
  CategoryStoryblok,
  LinkStoryblok,
  PricingPlanStoryblok,
  PricingSectionStoryblok,
  SubmenuStoryblok,
  VacancyStoryblok,
} from '~/component-types-sb'

export type Breakpoints = 'mobile' | 'tablet' | 'laptop' | 'desktop'

export type Theme = 'light' | 'dark'

export type Alignment = 'left' | 'center' | 'right'

export type TitleLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type ImageLoading = 'lazy' | 'eager'

export type ContainerSize = 'lg' | 'xl'

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

export type ArticleStoryblokWithRelations = ArticleStoryblok & {
  category: StoryblokStory<CategoryStoryblok>
  authors: StoryblokStory<AuthorStoryblok>[]
}

export type ArticlesSectionStoryblokWithRelations = ArticlesSectionStoryblok & {
  articles: StoryblokStory<ArticleStoryblok>[]
}

export type CareersSectionStoryblokWithRelations = CareersSectionStoryblok & {
  vacancies: StoryblokStory<VacancyStoryblok>[]
}

export type PricingSectionStoryblokWithRelations = PricingSectionStoryblok & {
  pricing_plans: StoryblokStory<PricingPlanStoryblok>[]
}
