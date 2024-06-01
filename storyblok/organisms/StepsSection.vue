<script setup lang="ts">
import type { StepsSectionStoryblok } from '~/component-types-sb'

interface Props {
  blok: StepsSectionStoryblok
}

defineProps<Props>()

const activeStepIndex = ref(0)

function changeStep(index: number): void {
  activeStepIndex.value = index
}

function getFormattedStepIndex(index: number): string {
  return `0${index + 1}.`
}

function getStepButtonText({ index, text }: { index: number, text: string | undefined }): string {
  return `${getFormattedStepIndex(index)} ${text}`
}
</script>

<template>
  <BaseSection
    v-editable="blok"
    class="steps-section"
  >
    <div class="steps-section__head">
      <LabelBadge>{{ blok.badge }}</LabelBadge>
      <h2 class="steps-section__heading">
        {{ blok.heading }}
      </h2>
    </div>
    <div
      v-if="blok.steps?.length"
      class="steps-section__body"
    >
      <div class="steps-section__buttons">
        <button
          v-for="(step, stepIndex) in blok.steps"
          :key="step.name"
          type="button"
          class="steps-section__button"
          :class="{ 'steps-section__button--active': stepIndex === activeStepIndex }"
          @click="changeStep(stepIndex)"
        >
          {{ getStepButtonText({ index: stepIndex, text: step.name }) }}
        </button>
      </div>
      <KeepAlive>
        <template
          v-for="(step, stepIndex) in blok.steps"
          :key="step._uid"
        >
          <Step
            v-if="stepIndex === activeStepIndex"
            :blok="step"
          />
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

  &__heading {
    margin-top: $spacing--4xl;
  }

  &__body {
    margin-top: clamped($min-size: $gap--sm, $max-size: $gap--md);
  }

  &__buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: $spacing--lg;
  }

  &__button {
    max-width: convert(500px, 'rem');
    flex: 1 1 convert(350px, 'rem');
    padding: clamped($min-size: $spacing--2xl, $max-size: $spacing--4xl)
      clamped($min-size: $spacing--2xl, $max-size: $spacing--8xl);
    border-radius: $rounded--2xl;
    color: $color--secondary--extra-dark;
    background-color: $color--secondary--extra-light;
    text-align: start;
    font-weight: $font--bold;

    &--active {
      background-color: $color-primary--light;
      color: $color-white--regular;
    }
  }
}

@include breakpoint('md') {
  .steps-section {
    &__button {
      text-align: center;
    }
  }
}
</style>
