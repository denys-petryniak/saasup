<script setup lang="ts">
import type { ArticleListStoryblok } from '~/component-types-sb'

interface Props {
  blok: ArticleListStoryblok
}

defineProps<Props>()

const storyId = inject(storyInjectionKey)

const route = useRoute()
const path = route.path

const isCategoryPage = computed(() => path.includes('categories'))
const isAuthorPage = computed(() => path.includes('authors'))

const filterQuery = computed(() => {
  if (isCategoryPage.value) {
    return {
      category: {
        in: storyId,
      },
    }
  }

  if (isAuthorPage.value) {
    return {
      authors: {
        in_array: storyId,
      },
    }
  }

  return {}
})

const { fetchArticles } = useFetchArticles(filterQuery.value)

const { articles } = await fetchArticles()
</script>

<template>
  <BaseSection
    v-editable="blok"
    :is-top-gap-hidden="blok.hide_top_gap"
  >
    <GridBox
      v-if="articles?.length"
      :columns="blok.columns"
    >
      <ArticleCard
        v-for="article in articles"
        :key="article.uuid"
        :blok="article.content"
        :slug="article.full_slug"
      />
    </GridBox>
  </BaseSection>
</template>
