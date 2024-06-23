<script setup lang="ts">
import type { Alignment, HeadingTag } from '~/types'

interface Props {
  heading: string
  headingLevel?: HeadingTag
  badge?: string
  description?: string
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
    <div class="content-block__body">
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
        v-if="description"
        class="content-block__description"
        v-html="description"
      />
    </div>
    <div
      v-if="$slots.footer"
      class="content-block__footer"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped lang="scss">
$text-width--max: convert(750px, 'rem');

.content-block {
  $parent: &;

  &__body {
    display: flex;
    flex-direction: column;
    gap: clamped($min-size: $spacing--2xl, $max-size: $spacing--4xl);
  }

  &__footer {
    margin-top: clamped($min-size: $spacing--4xl, $max-size: $spacing--8xl);
  }

  &__heading,
  &__description {
    max-width: $text-width--max;
  }

  &__heading {
    margin: 0;
  }

  &__description::v-deep(p:first-of-type) {
    margin-top: 0;
  }

  &--left {
    text-align: left;

    #{$parent}__body {
      align-items: flex-start;
    }
  }

  &--center {
    text-align: center;

    #{$parent}__body {
      align-items: center;
    }
  }

  &--right {
    text-align: right;

    #{$parent}__body {
      align-items: flex-end;
    }
  }
}
</style>
