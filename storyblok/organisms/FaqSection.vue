<script setup lang="ts">
import type { FaqSectionStoryblok } from '~/component-types-sb'

interface Props {
  blok: FaqSectionStoryblok
}

defineProps<Props>()
</script>

<template>
  <BaseSection
    v-editable="blok"
    :is-top-gap-hidden="blok.hide_top_gap"
    :is-top-double-gap="blok.set_top_double_gap"
    :is-bottom-double-gap="blok.set_bottom_double_gap"
    class="faq-section"
  >
    <ContentBlock
      v-if="blok.heading"
      :headline="blok.headline"
      :title="blok.heading"
      :title-level="blok.heading_level"
      :theme="blok.theme ?? 'light'"
    />
    <Accordion class="faq-section__accordion">
      <AccordionPanel
        v-for="item in blok.cards"
        :key="item._uid"
        :name="blok.accordion_group_name"
      >
        <template #header>
          {{ item.title }}
        </template>
        <template #content>
          <div v-html="renderRichText(item.content)" />
        </template>
      </AccordionPanel>
    </Accordion>
  </BaseSection>
</template>

<style scoped lang="scss">
.faq-section {
  background-color: $primary-color--light;

  &__accordion {
    margin: clamped($min-size: $spacing--4xl, $max-size: $spacing--8xl) auto 0 auto;
  }
}
</style>
