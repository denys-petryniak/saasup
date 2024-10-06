<script setup lang="ts">
import type { HeroSectionStoryblok } from '~/component-types-sb'

interface Props {
  blok: HeroSectionStoryblok
}

const props = defineProps<Props>()

const heroDescription = computed(() => {
  return renderRichText(props.blok.description)
})
</script>

<template>
  <BaseSection
    v-editable="blok"
    class="hero-section"
  >
    <div class="hero-section__body">
      <div class="hero-section__content">
        <ContentBlock
          v-if="blok.heading"
          :title="blok.heading"
          :title-level="blok.heading_level ?? 'h1'"
          :description="heroDescription"
          :align="{ mobile: 'center', laptop: 'left' }"
        >
          <template #footer>
            <div class="hero-section__buttons">
              <BaseButton to="/pricing">
                Get Started
              </BaseButton>
              <BaseButton
                to="https://youtu.be/dQw4w9WgXcQ?si=5APElTfy7hzEvZJk"
                target="_blank"
                color="light-bordered"
                class="hero-section__video-button"
                aria-label="Play video button"
                icon="carbon:play-filled"
                trailing
              >
                <span class="hero-section__video-button-text">Watch Video</span>
              </BaseButton>
            </div>
          </template>
        </ContentBlock>
      </div>
      <div
        v-if="blok.image?.filename"
        class="hero-section__image-box"
      >
        <!-- Width & height set manually because custom metadata (width & height)
        for the asset is not available from the CMS. This is due to limitations in the free plan. -->
        <NuxtImg
          :src="blok.image.filename"
          :width="1541"
          :height="1168"
          :alt="blok.image.alt"
          sizes="100vw lg:50vw"
          class="hero-section__image"
        />
      </div>
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
.hero-section {
  &__body {
    display: grid;
    grid-template-columns: 1fr;
    gap: clamped($min-size: $spacing--4xl, $max-size: $spacing--8xl);

    @include breakpoint('lg') {
      grid-template-columns: 0.8fr 1fr;
    }
  }

  &__image {
    border-radius: $rounded--3xl;
    box-shadow: $shadow--regular;

    @include breakpoint('lg') {
      box-shadow: none;
    }
  }

  &__buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: $spacing--lg;

    @include breakpoint('lg') {
      justify-content: flex-start;
    }
  }

  &__video-button-text {
    margin-right: clamped($min-size: $spacing--lg, $max-size: $spacing--xl);
  }
}
</style>
