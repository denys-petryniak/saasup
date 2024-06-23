<script setup lang="ts">
import type { HeroSectionStoryblok } from '~/component-types-sb'

interface Props {
  blok: HeroSectionStoryblok
}

const props = defineProps<Props>()

const heroDescription = computed(() =>
  renderRichText(props.blok.description))

const { isMobileScreenSize, isTabletScreenSize } = useMedia()
const contentBlockAlignment = computed(() => isMobileScreenSize.value || isTabletScreenSize.value ? 'center' : 'left')
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
          :heading="blok.heading"
          :heading-level="blok.heading_level ?? 'h1'"
          :description="heroDescription"
          :align="contentBlockAlignment"
        >
          <template #footer>
            <div class="hero-section__buttons">
              <BaseButton>
                Get Started
              </BaseButton>
              <BaseButton
                color="light-bordered"
                class="hero-section__video-button"
                aria-label="Play video button"
              >
                <span class="hero-section__video-button-text">Watch Video</span>
                <Icon
                  class="hero-section__video-button-icon"
                  name="carbon:play-filled"
                />
              </BaseButton>
            </div>
          </template>
        </ContentBlock>
      </div>
      <div v-if="blok.image?.filename" class="hero-section__image-box">
        <!-- Width & height set manually because custom metadata (width & height)
        for the asset is not available from the CMS. This is due to limitations in the free plan. -->
        <NuxtImg
          :src="blok.image.filename"
          :width="1541"
          :height="1168"
          :alt="blok.image.alt"
          sizes="100vw xl:740px"
          class="hero-section__image"
        />
      </div>
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
.hero-section {
  &__body {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: $spacing--4xl;
  }

  &__content {
    // TODO: increase accuracy here
    flex: 1 1 convert(400px, 'rem');
  }

  &__image-box {
    flex: 1 1 convert(500px, 'rem');
  }

  &__buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: $spacing--lg;
  }

  &__video-button {
    position: relative;
  }

  &__video-button-text {
    margin-right: $spacing--2xl;
  }

  &__video-button-icon {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate3d(0, -50%, 0);
    width: 30%;
    height: 100%;
    padding: $spacing--xs;
  }

  &__image {
    border-radius: $rounded--3xl;
    box-shadow: $shadow--regular;
  }
}

@include breakpoint('lg') {
  .hero-section {
    &__buttons {
      justify-content: flex-start;
    }
  }
}
</style>
