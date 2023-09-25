<script setup lang="ts">
import type { TestimonialStoryblok } from '~/component-types-sb'

interface Props {
  blok: TestimonialStoryblok
}

const props = defineProps<Props>()

const getTestimonialText = computed(() =>
  renderRichText(props.blok.text))
</script>

<template>
  <div
    v-editable="blok"
    class="testimonial"
  >
    <div
      class="testimonial__text"
      v-html="getTestimonialText"
    />
    <template
      v-if="blok.authors?.length"
    >
      <Author
        v-for="author in blok.authors"
        :key="author._uid"
        :blok="author"
      />
    </template>
  </div>
</template>

<style scoped lang="scss">
$testimonial-quote-icon-size: convert(40px, 'rem');

.testimonial {
  position: relative;
  color: $color-white--regular;

  &::before {
    content: '';
    position: absolute;
    inset: 0 0 0 50%;
    transform: translate3d(-50%, 0, 0);
    width: $testimonial-quote-icon-size;
    height: $testimonial-quote-icon-size;
    background: url('/images/quote.svg') no-repeat center/contain;
  }

  &__text {
    margin-top: $gap--small;
    font-style: italic;
  }
}
</style>
