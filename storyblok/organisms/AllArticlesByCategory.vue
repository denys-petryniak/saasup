<script setup lang="ts">
import { storyIdInjectionKey } from '@/utils/keys'
import type { AllArticlesByCategoryStoryblok } from '~/component-types-sb'

interface Props {
  blok: AllArticlesByCategoryStoryblok
}

defineProps<Props>()

const storyId = inject(storyIdInjectionKey)

const { articles, fetchArticles } = useFetchArticles({
  category: {
    in: storyId,
  },
})

await fetchArticles()
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
        :article="article.content"
        :slug="article.full_slug"
      />
    </GridBox>
  </BaseSection>
</template>
