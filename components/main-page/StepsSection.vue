<script setup lang="ts">
import type { Step } from '~/types'

interface Props {
  subtitle: string
  title: string
  steps: Step[]
}

defineProps<Props>()

const activeStepIndex = ref(0)

function changeStep(index: number): void {
  activeStepIndex.value = index
}

function getFormattedStepIndex(index: number): string {
  return `0${index + 1}.`
}

function getStepButtonText({ index, text }: { index: number; text: string }): string {
  return `${getFormattedStepIndex(index)} ${text}`
}
</script>

<template>
  <BaseSection class="steps-section">
    <div class="steps-section__head">
      <BaseBadge>{{ subtitle }}</BaseBadge>
      <h2 class="steps-section__title">
        {{ title }}
      </h2>
    </div>
    <div
      v-if="steps.length"
      class="steps steps-section__steps"
    >
      <div class="steps__buttons">
        <button
          v-for="(step, stepIndex) in steps"
          :key="step.name"
          class="steps__button"
          :class="{ 'steps__button--active': stepIndex === activeStepIndex }"
          @click="changeStep(stepIndex)"
        >
          {{ getStepButtonText({ index: stepIndex, text: step.name }) }}
        </button>
      </div>
      <KeepAlive>
        <template
          v-for="(step, stepIndex) in steps"
          :key="step.name"
        >
          <div
            v-if="stepIndex === activeStepIndex"
            class="steps__body"
          >
            <div class="steps__content">
              <div class="steps__content-head">
                <img
                  v-if="step.icon?.src"
                  :src="step.icon.src"
                  :width="step.icon.width"
                  :height="step.icon.height"
                  :alt="step.icon.alt"
                  loading="lazy"
                  class="steps__content-head-icon"
                >
                <h3 class="steps__content-head-title">
                  {{ step.title }}
                </h3>
              </div>
              <p>{{ step.description }}</p>
              <BaseButton
                color="dark"
                class="steps__content-button"
              >
                Get Started
              </BaseButton>
            </div>
            <div class="steps__image-box">
              <NuxtImg
                v-if="step.image.src"
                :src="step.image.src"
                :width="step.image.width"
                :height="step.image.height"
                :alt="step.image.alt"
                format="avif,webp"
                sizes="sm:100vw xl:602px"
                loading="lazy"
                class="steps__image"
              />
            </div>
          </div>
        </template>
      </KeepAlive>
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
.steps-section {
  &__head {
    text-align: center;
  }

  &__title {
    margin-top: $spacing--xlarge;
  }

  &__steps {
    margin-top: clamped($min-size: $gap--small, $max-size: $gap--medium);
  }
}

.steps {
  &__body {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing--2xlarge;
    margin-top: clamped($min-size: $spacing--2xlarge, $max-size: $spacing--3xlarge);
    padding: 0 clamped($min-size: $spacing--xsmall, $max-size: $spacing--3xlarge);
  }

  &__content {
    flex: 1 1 convert(500px, 'rem');
  }

  &__image-box {
    flex: 1 1 convert(500px, 'rem');
  }

  &__content-head {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing--large;
  }

  &__content-head-title {
    margin: 0;
    max-width: convert(500px, 'rem');
    flex: 1 1 convert(350px, 'rem');
  }

  &__content-button {
    display: block;
    margin-top: $spacing--xlarge;
  }

  &__buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: $spacing--medium;
  }

  &__button {
    max-width: convert(500px, 'rem');
    flex: 1 1 convert(350px, 'rem');
    padding: clamped($min-size: $spacing--large, $max-size: $spacing--xlarge) clamped($min-size: $spacing--large, $max-size: $spacing--2xlarge);
    border-radius: $border-radius--medium;
    color: $color--secondary--extra-dark;
    background-color: $color--secondary--extra-light;
    text-align: start;
    font-weight: $font-weight--bold;

    &--active {
      background-color: $color-primary--light;
      color: $color-white--regular;
    }
  }

  &__image {
    border-radius: $border-radius--xlarge;
  }
}

@include breakpoint('medium') {
  .steps {
    &__button {
      text-align: center;
    }
  }
}
</style>
