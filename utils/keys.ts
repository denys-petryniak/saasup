import type { StoryblokStory } from 'storyblok-generate-ts'
import type { AuthorStoryblok, CategoryStoryblok } from '~/component-types-sb'

export const storyInjectionKey = Symbol('Storyblok Story') as InjectionKey<string>

interface BlogArticleMeta {
  date: string
  category: StoryblokStory<CategoryStoryblok>
  authors: StoryblokStory<AuthorStoryblok>[]
}

export const blogArticleMetaInjectionKey = Symbol('Storyblok blog article meta') as InjectionKey<BlogArticleMeta>
