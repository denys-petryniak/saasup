<script setup lang="ts">
import type { TestimonialSectionStoryblok } from '~/component-types-sb'

interface Props {
  blok: TestimonialSectionStoryblok
}

const props = defineProps<Props>()

const carouselSettings = ref({
  wrapAround: true, // enable infinite scrolling mode
  transition: 500, // sliding transition time in ms
})

const img = useImage()

const testimonialBackground = computed(() => {
  if (!props.blok.background?.filename)
    return

  const imgUrl = img(props.blok.background.filename, {
    format: 'webp',
  })

  return `url('${imgUrl}')`
})
</script>

<template>
  <BaseSection
    v-editable="blok"
    class="testimonial-section"
  >
    <ContentBlock
      v-if="blok.heading"
      :headline="blok.headline"
      :heading="blok.heading"
      :heading-level="blok.heading_level"
      :align="blok.alignment ?? 'center'"
      theme="light"
      class="testimonial-section__content"
    />
    <Carousel
      v-bind="carouselSettings"
      class="testimonial-section__carousel"
    >
      <template #slides>
        <Slide
          v-for="testimonial in blok.entries"
          :key="testimonial._uid"
        >
          <TestimonialEntry
            :blok="testimonial"
          />
        </Slide>
      </template>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </BaseSection>
</template>

<style scoped lang="scss">
$section-bg-z-index: -2;
$section-bg-decor-z-index: -1;

.testimonial-section {
  background-color: $color-primary--light;

  @include breakpoint('lg') {
    background-image: v-bind(testimonialBackground);
    background-repeat: no-repeat;
    background-size: cover;
  }

  &__carousel {
    margin-top: $spacing--8xl;
  }
}
</style>

<style lang="scss">
$carousel-button-color: #6850ff;
$carousel-button-blur: 12px;
$carousel-button-size: toRem(76px);

.carousel {
  &__slide {
    padding: 0 clamped($min-size: $spacing--xs, $max-size: $gap--lg);
  }

  &__prev,
  &__next {
    width: $carousel-button-size;
    height: $carousel-button-size;
    border-radius: $rounded--full;
    color: $color-white--regular;
    background-color: rgba($carousel-button-color, 0.2);
    backdrop-filter: blur($carousel-button-blur);

    &:hover {
      background-color: $carousel-button-color;
      color: $color-white--regular;
    }
  }
}

@include breakpoint('md', $max: true) {
  .carousel {
    padding-bottom: $carousel-button-size + $spacing--4xl;

    &__prev,
    &__next {
      top: auto;
      bottom: 0;
      transform: none;
    }

    &__prev {
      left: calc(50% - ($carousel-button-size + $spacing--2xl));
    }

    &__next {
      right: calc(50% - ($carousel-button-size + $spacing--2xl));
    }
  }
}
</style>
