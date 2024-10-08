import type { StoryblokStory } from 'storyblok-generate-ts'
import type { ArticleStoryblok, AuthorStoryblok, CategoryStoryblok, PricingPlanStoryblok } from '~/component-types-sb'

export const storyInjectionKey = Symbol('Storyblok Story') as InjectionKey<string>

export interface BlogArticleGeneralData {
  date: ArticleStoryblok['date']
  category: StoryblokStory<CategoryStoryblok>
  authors: StoryblokStory<AuthorStoryblok>[]
}

export const blogArticleGeneralDataInjectionKey = Symbol('Storyblok blog article general data') as InjectionKey<BlogArticleGeneralData>

export interface PricingPlanGeneralData {
  price: PricingPlanStoryblok['price']
  features: PricingPlanStoryblok['features']
}

export const pricingPlanGeneralDataInjectionKey = Symbol('Storyblok pricing plan general data') as InjectionKey<PricingPlanGeneralData>

export interface ModalOptions {
  visible: Ref<boolean> | boolean
  close: () => void
}

export const modalInjectionKey = Symbol('Modal :visible & @close') as InjectionKey<ModalOptions>
