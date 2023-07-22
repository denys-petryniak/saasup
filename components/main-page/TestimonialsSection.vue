<script setup lang="ts">
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

import type { Testimonial } from '~/types'

interface Props {
  subtitle: string
  title: string
  testimonials: Testimonial[]
}

defineProps<Props>()

const carouselSettings = ref({
  wrapAround: true, // enable infinite scrolling mode
  transition: 500, // sliding transition time in ms
})
</script>

<template>
  <BaseSection class="testimonials-section">
    <div class="testimonials-section__head">
      <SectionSubtitle>{{ subtitle }}</SectionSubtitle>
      <h2 class="testimonials-section__title">
        {{ title }}
      </h2>
    </div>
    <Carousel
      v-bind="carouselSettings"
      class="carousel testimonials-section__carousel"
    >
      <template #slides>
        <Slide
          v-for="slide in testimonials"
          :key="slide.text"
        >
          <div class="carousel__item">
            <p class="carousel__text">
              {{ slide.text }}
            </p>
            <div class="carousel__author">
              <img
                v-if="slide.author?.photo"
                :src="slide.author.photo.src"
                :alt="slide.author.photo.alt"
                width="108"
                height="108"
                class="carousel__author-image"
              >
              <p class="carousel__author-name">
                {{ slide.author?.name }}
              </p>
              <p class="carousel__author-job">
                {{ slide.author?.job }}
              </p>
              <Rating
                :rating="slide.author?.rating"
                class="carousel__author-rating"
              />
            </div>
          </div>
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

  &__title {
    margin-top: $spacing--xlarge;
    color: $color-white--regular;
  }

  @include breakpoint('large') {
    &::before {
      content: '';
      position: absolute;
      inset: 0 0 0 50%;
      transform: translate3d(-50%, 0, 0);
      width: 100vw;
      height: 100%;
      z-index: $section-bg-decor-z-index;
      background-image: url('/images/main-page/testimonials-bg-decor.png');
      background-repeat: no-repeat;
      background-position: top right;
      background-size: cover;
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
    margin-top: $spacing--2xlarge;
  }
}
</style>

<style lang="scss">
$carousel-button-color: #6850FF;
$carousel-button-blur: 12px;
$carousel-button-size: convert(76px, 'rem');
$carousel-quote-icon-size: convert(40px, 'rem');

.carousel {
  &__slide {
    padding: 0 clamped($min-size: $spacing--2xsmall, $max-size: $gap--large);
  }

  &__prev,
  &__next {
    width: $carousel-button-size;
    height: $carousel-button-size;
    border-radius: $border-radius--circle;
    color: $color-white--regular;
    background-color: rgba($carousel-button-color, 0.2);
    backdrop-filter: blur($carousel-button-blur);

    @media (hover: hover) {
      &:hover {
        background-color: $carousel-button-color;
        color: $color-white--regular;
      }
    }
  }

  &__item {
    position: relative;
    color: $color-white--regular;

    &::before {
      content: '';
      position: absolute;
      inset: 0 0 0 50%;
      transform: translate3d(-50%, 0, 0);
      width: $carousel-quote-icon-size;
      height: $carousel-quote-icon-size;
      background: url('/images/quote.svg') no-repeat center/contain;
    }
  }

  &__text {
    margin-top: $gap--small;
    font-style: italic;
  }

  &__author {
    margin-top: $spacing--xlarge;
  }

  &__author-image {
    border-radius: $border-radius--circle;
  }

  &__author-name,
  &__author-job,
  &__author-rating {
    margin: calc($spacing--large / 2) 0 0 0;
  }

  &__author-name {
    @include fluid-typography(
      $min-font-size: $font-size--xlarge,
      $max-font-size: $font-size--3xlarge,
      $min-line-height: $line-height--3xsmall,
      $max-line-height: $line-height--2xsmall,
    );
    font-weight: $font-weight--bold;
  }

  &__author-job {
    font-weight: $font-weight--semibold;
  }
}

@include breakpoint('medium', $max: true) {
  .carousel {
    padding-bottom: calc($carousel-button-size + $spacing--xlarge);

    &__prev,
    &__next {
      top: auto;
      bottom: 0;
      transform: none;
    }

    &__prev {
      left: calc(50% - ($carousel-button-size + $spacing--large))
    }

    &__next {
      right: calc(50% - ($carousel-button-size + $spacing--large))
    }
  }
}
</style>
