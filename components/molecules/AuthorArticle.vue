<script setup lang="ts">
import type { AuthorEntryStoryblok, AuthorStoryblok } from '~/component-types-sb'

interface Props {
  blok: AuthorStoryblok | AuthorEntryStoryblok
  slug?: string
}

defineProps<Props>()
</script>

<template>
  <div
    v-editable="blok"
    class="author"
  >
    <div class="author__image-box">
      <NuxtImg
        v-if="blok.photo?.filename"
        :src="blok.photo.filename"
        :width="84"
        :height="84"
        :alt="blok.photo.alt"
        format="jpg"
        class="author__image"
      />
    </div>
    <div class="author__text">
      <NuxtLink v-if="slug" :to="prependLeadingSlash(slug)">
        <p class="author__name">
          {{ blok.name }}
        </p>
      </NuxtLink>
      <p v-else class="author__name">
        {{ blok.name }}
      </p>
      <p class="author__role">
        {{ blok.role }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.author {
  display: flex;
  gap: $spacing--md;
  align-items: center;

  &__image-box {
    flex-shrink: 0;
  }

  &__image {
    margin-inline: auto;
    border-radius: $rounded--full;
  }

  &__name {
    margin: 0;
    font-size: $text--2xl;
    line-height: $leading--tight;
    font-weight: $font--bold;
    color: $primary-color--dark;
  }

  &__role {
    margin: $spacing--xs 0 0 0;
    font-weight: $font--semibold;
  }
}
</style>
