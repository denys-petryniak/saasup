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
        <BaseButton>Get Started</BaseButton>
        <BaseButton>
          Watch Video
          <Icon class="navigation__button-icon" name="carbon:play-filled" size="1.25em" />
        </BaseButton>
      </div>
    </div>
    <div class="hero-section__image-container">
      <img
        class="hero-section__image"
        src="~/assets/images/main-page/hero-image.png"
        alt="Hero image"
      >
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
    margin-top: $spacing--xlarge;
  }

  &__image {
    border-radius: 25px;
    box-shadow: 0 3px 13px 0 rgba(0, 0, 0, 0.11);
  }

  // &::before {
  //   content: '';
  //   position: absolute;
  //   top: 0;
  //   right: 0;
  //   width: 1000px;
  //   height: 500px;
  //   z-index: -1;
  //   background: url('~/assets/images/main-page/main-page-background.png') no-repeat right top;
  //   background-size: contain;
  //   // background-size: 80%;
  //   // background-size: min(600px, 100%);
  // }
}

@include breakpoint(large) {
  .hero-section {
    grid-template-columns: 0.8fr 1fr;
  }
}
</style>
