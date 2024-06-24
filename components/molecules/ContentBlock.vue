<script setup lang="ts">
import type { Alignment, HeadingLevel } from '~/types'

interface Props {
  heading: string
  headingLevel?: HeadingLevel
  badge?: string
  headerDescription?: string
  align?: Alignment
}

withDefaults(defineProps<Props>(), {
  headingLevel: 'h2',
  align: 'left',
})
</script>

<template>
  <div
    class="content-block"
    :class="`content-block--${align}`"
  >
    <div class="content-block__header">
      <LabelBadge
        v-if="badge"
        class="content-block__badge"
      >
        {{ badge }}
      </LabelBadge>
      <DynamicHeading
        :as="headingLevel"
        class="content-block__heading"
      >
        {{ heading }}
      </DynamicHeading>
      <div
        v-if="headerDescription"
        class="content-block__description"
        v-html="headerDescription"
      />
    </div>
    <div v-if="$slots.default" class="content-block__body">
      <slot />
    </div>
    <div v-if="$slots.footer" class="content-block__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped lang="scss">
$header-text-width--max: convert(750px, 'rem');

.content-block {
  $parent: &;

  &__header {
    display: flex;
    flex-direction: column;
    gap: clamped($min-size: $spacing--2xl, $max-size: $spacing--4xl);
  }

  &__body {
    margin-top: clamped($min-size: $spacing--2xl, $max-size: $spacing--4xl);
  }

  &__footer {
    margin-top: clamped($min-size: $spacing--4xl, $max-size: $spacing--8xl);
  }

  &__heading,
  &__description {
    max-width: $header-text-width--max;
  }

  &__heading {
    margin: 0;
  }

  &__description::v-deep(p:first-of-type) {
    margin-top: 0;
  }

  &--left {
    text-align: left;

    #{$parent}__header {
      align-items: flex-start;
    }
  }

  &--center {
    text-align: center;

    #{$parent}__header {
      align-items: center;
    }
  }

  &--right {
    text-align: right;

    #{$parent}__header {
      align-items: flex-end;
    }
  }
}
</style>
