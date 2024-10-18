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
