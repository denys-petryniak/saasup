<script setup lang="ts">
import type { GridCardStoryblok } from '~/component-types-sb'

interface Props {
  blok: GridCardStoryblok
}

const props = defineProps<Props>()

const cardDescription = computed(() => renderRichText(props.blok.description))
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
        sizes="100vw md:360px"
        loading="lazy"
        class="grid-card__image"
      />
    </template>
    <template #default>
      <DynamicTitle
        v-if="blok.heading"
        :as="blok.heading_level"
        class="grid-card__heading"
      >
        {{ blok.heading }}
      </DynamicTitle>
      <div
        class="grid-card__description"
        v-html="cardDescription"
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
  border-radius: $rounded--3xl * 2;
  text-align: center;

  &__heading {
    margin: 0;
  }

  &__link {
    display: inline-block;
    font-weight: $font--bold;
    text-decoration: underline;
  }

  @media (hover: none) {
    background-color: $secondary-color--extra-light;
  }

  @media (hover: hover) {
    &:hover {
      background-color: $secondary-color--extra-light;
    }
  }
}
</style>
