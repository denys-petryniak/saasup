import type { StoryblokStory } from 'storyblok-generate-ts'
import type {
  ArticlesSectionStoryblok,
  ArticleStoryblok,
  AuthorStoryblok,
  CareersSectionStoryblok,
  CategoryStoryblok,
  PricingPlanStoryblok,
  PricingSectionStoryblok,
  VacancyStoryblok,
} from '~/component-types-sb'

export type Breakpoints = 'mobile' | 'tablet' | 'laptop' | 'desktop'

export type Theme = 'light' | 'dark'

export type Alignment = 'left' | 'center' | 'right'

export type TitleLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type ImageLoading = 'lazy' | 'eager'

export type ContainerSize = 'lg' | 'xl'

export type LinkType = 'email' | 'phone'

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
