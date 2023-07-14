<script setup lang="ts">
interface Props {
  title: string
  description: string
}

defineProps<Props>()
</script>

<template>
  <BaseSection class="hero-section">
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
        <BaseButton
          variant="light"
          class="hero-section__video-button"
        >
          <span class="hero-section__video-button-text">Watch Video</span>
          <Icon
            class="hero-section__video-button-icon"
            name="carbon:play-filled"
          />
        </BaseButton>
      </div>
    </div>
    <div class="hero-section__image-container">
      <img
        class="hero-section__image"
        src="/images/main-page/hero.png"
        width="1541"
        height="1168"
        alt="Hero image"
      >
      <!-- https://github.com/nuxt/image/issues/587 -->
      <!-- <NuxtImg
        class="hero-section__image"
        src="/images/main-page/hero.png"
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
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: $spacing--xlarge;

  &__content {
    flex: 1 1 convert(400px, 'rem');
  }

  &__image-container {
    flex: 1 1 convert(500px, 'rem');
  }

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

  &__video-button {
    position: relative;
  }

  &__video-button-text {
    margin-right: $spacing--large;
  }

  &__video-button-icon {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate3d(0, -50%, 0);
    width: 30%;
    height: 100%;
    padding: $spacing--xsmall;
  }

  &__image {
    border-radius: 25px;
    box-shadow: 0 3px 13px 0 rgba(0, 0, 0, 0.11);
  }
}
</style>
