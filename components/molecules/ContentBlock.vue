<script setup lang="ts">
import type { Alignment, HeadingLevel, Theme } from '~/types'

interface Props {
  badge?: string
  heading?: string
  headingLevel?: HeadingLevel
  description?: string
  align?: Alignment
  theme?: Theme
}

const props = withDefaults(defineProps<Props>(), {
  headingLevel: 'h2',
  align: 'left',
})

const contentBlockClasses = computed(() => ({
  'content-block--left': props.align === 'left',
  'content-block--center': props.align === 'center',
  'content-block--right': props.align === 'right',
  'content-block--dark': props.theme === 'dark',
  'content-block--light': props.theme === 'light',
}))
</script>

<template>
  <div
    class="content-block"
    :class="contentBlockClasses"
  >
    <div class="content-block__header">
      <LabelBadge
        v-if="badge"
        class="content-block__badge"
      >
        {{ badge }}
      </LabelBadge>
      <template v-else>
        <slot name="badge" />
      </template>
      <DynamicHeading
        v-if="heading"
        :as="headingLevel"
        class="content-block__heading"
      >
        {{ heading }}
      </DynamicHeading>
      <template v-else>
        <slot name="heading" />
      </template>
      <div
        v-if="description"
        class="content-block__description"
        v-html="description"
      />
      <template v-else>
        <slot name="description" />
      </template>
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

  &--light {
    #{$parent}__heading,
    #{$parent}__description {
      color: $color-white--regular;
    }
  }
}
</style>
