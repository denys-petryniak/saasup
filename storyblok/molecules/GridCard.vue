<script setup lang="ts">
import type { GridCardStoryblok } from '~/component-types-sb'

interface Props {
  blok: GridCardStoryblok
}

const props = defineProps<Props>()

const getCardDescription = computed(() =>
  renderRichText(props.blok.description))
</script>

<template>
  <BaseCard
    v-editable="blok"
    class="grid-card"
  >
    <template #header>
      <NuxtImg
        v-if="blok.image?.filename"
        :src="blok.image.filename"
        :width="2000"
        :height="1500"
        :alt="blok.image.alt"
        sizes="100vw md:340px"
        loading="lazy"
        class="grid-card__image"
      />
    </template>
    <template #default>
      <h3 class="grid-card__title">
        {{ blok.title }}
      </h3>
      <div
        class="grid-card__description"
        v-html="getCardDescription"
      />
    </template>
    <template #footer>
      <!-- https://www.storyblok.com/faq/link-object-history -->
      <NuxtLink
        v-if="blok.link_url?.cached_url"
        :to="prependLeadingSlash(blok.link_url.cached_url)"
        class="grid-card__link"
      >
        {{ blok.link_label }}
      </NuxtLink>
    </template>
  </BaseCard>
</template>

<style scoped lang="scss">
.grid-card {
  text-align: center;

  &__title {
    margin: 0;
  }

  &__link {
    display: inline-block;
    text-decoration: underline;
  }
}
</style>
