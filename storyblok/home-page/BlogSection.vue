<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
  <BaseSection
    v-editable="blok"
    class="blog-section"
  >
    <div class="blog-section__head">
      <BaseBadge>{{ blok?.badge }}</BaseBadge>
      <h2 class="blog-section__heading">
        {{ blok?.heading }}
      </h2>
    </div>
    <div
      v-if="blok?.articles.length"
      class="blog-section__cards"
    >
      <ArticleCard
        v-for="article in blok.articles"
        :key="article.uuid"
        :article="article.content"
        :slug="article.full_slug"
      />
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
$card-min-width: convert(250px, 'rem');

.blog-section {
  &__head {
    text-align: center;
  }

  &__heading {
    margin-top: $spacing--xlarge;
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax($card-min-width, 1fr));
    gap: $spacing--2xlarge;
    margin-top: clamped($min-size: $spacing--xlarge, $max-size: $spacing--2xlarge);
  }
}
</style>
