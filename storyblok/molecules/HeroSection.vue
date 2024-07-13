<script setup lang="ts">
import type { HeroSectionStoryblok } from '~/component-types-sb'

interface Props {
  blok: HeroSectionStoryblok
}

const props = defineProps<Props>()

const heroDescription = computed(() =>
  renderRichText(props.blok.description))

const { isTabletScreenSizeAndSmaller } = useMedia()
const contentBlockAlignment = computed(() => isTabletScreenSizeAndSmaller.value ? 'center' : 'left')
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

  &__video-button {
    position: relative;
  }

  //TODO: improve styles for video button
  &__video-button-text {
    margin-right: $spacing--2xl;
  }

  &__video-button-icon {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate3d(0, -50%, 0);
    width: 30%;
    height: 90%;
  }
}
</style>
