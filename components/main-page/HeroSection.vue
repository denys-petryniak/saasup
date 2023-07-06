<script setup lang="ts">
interface Props {
  title: string
  description: string
}

defineProps<Props>()
</script>

<template>
  <BaseSection class="hero-section border-debug">
    <div class="hero-section__content">
      <h1 class="hero-section__title">
        {{ title }}
      </h1>
      <p class="hero-section__description">
        {{ description }}
      </p>
      <div class="hero-section__buttons">
        <BaseButton variant="default">
          Get Started
        </BaseButton>
        <BaseButton variant="light">
          Watch Video
          <Icon class="navigation__button-icon" name="carbon:play-filled" size="1.25em" />
        </BaseButton>
      </div>
    </div>
    <div class="hero-section__image-container">
      <img
        class="hero-section__image"
        src="/images/main-page/hero-image.png"
        width="1541"
        height="1168"
        alt="Hero image"
      >
      <!-- https://github.com/nuxt/image/issues/587 -->
      <!-- <NuxtImg
        class="hero-section__image"
        src="/images/main-page/hero-image.png"
        width="1541"
        height="1168"
        sizes="sm:100vw md:100vw lg:760px"
        format="avif,webp"
        alt="Hero image"
      /> -->
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
.hero-section {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  grid-gap: $spacing--xlarge;

  &__title {
    margin: 0;
  }

  &__description {
    margin-top: $spacing--xlarge;
  }

  &__buttons {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing--medium;
    margin-top: $spacing--xlarge;
  }

  &__image {
    border-radius: 25px;
    box-shadow: 0 3px 13px 0 rgba(0, 0, 0, 0.11);
  }
}

@include breakpoint('large') {
  .hero-section {
    grid-template-columns: 0.8fr 1fr;
  }
}
</style>
