<script setup lang="ts">
import type { TestimonialsSectionStoryblok } from '~/component-types-sb'

interface Props {
  blok: TestimonialsSectionStoryblok
}

const props = defineProps<Props>()

const carouselSettings = ref({
  wrapAround: true, // enable infinite scrolling mode
  transition: 500, // sliding transition time in ms
})

const img = useImage()

const getTestimonialsBackground = computed(() => {
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
    class="testimonials-section"
  >
    <div class="testimonials-section__head">
      <BaseBadge>{{ blok.badge }}</BaseBadge>
      <h2 class="testimonials-section__heading">
        {{ blok.heading }}
      </h2>
    </div>
    <Carousel
      v-bind="carouselSettings"
      class="carousel testimonials-section__carousel"
    >
      <template #slides>
        <Slide
          v-for="testimonial in blok.testimonials"
          :key="testimonial._uid"
        >
          <Testimonial
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

.testimonials-section {
  position: relative;

  &__head {
    text-align: center;
  }

  &__heading {
    margin-top: $spacing--4xl;
    color: $color-white--regular;
  }

  @include breakpoint('lg') {
    &::before {
      content: '';
      position: absolute;
      inset: 0 0 0 50%;
      transform: translate3d(-50%, 0, 0);
      width: 100vw;
      height: 100%;
      z-index: $section-bg-decor-z-index;
      background: v-bind(getTestimonialsBackground) no-repeat top right/cover;
      pointer-events: none;
    }
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0 0 0 50%;
    transform: translate3d(-50%, 0, 0);
    width: 100vw;
    height: 100%;
    z-index: $section-bg-z-index;
    background-color: $color-primary--light;
    pointer-events: none;
  }

  &__carousel {
    margin-top: $spacing--8xl;
  }
}
</style>

<style lang="scss">
$carousel-button-color: #6850ff;
$carousel-button-blur: 12px;
$carousel-button-size: convert(76px, 'rem');

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
    padding-bottom: calc($carousel-button-size + $spacing--4xl);

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
