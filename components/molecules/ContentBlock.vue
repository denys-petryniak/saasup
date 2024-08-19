<script setup lang="ts">
import type { Alignment, Breakpoints, HeadingLevel, Theme } from '~/types'

type ResponsiveAlignment = {
  [key in Breakpoints]?: Alignment
}

interface Props {
  headline?: string
  heading?: string
  headingLevel?: HeadingLevel
  description?: string
  align?: ResponsiveAlignment
  theme?: Theme
}

const props = withDefaults(defineProps<Props>(), {
  headingLevel: 'h2',
  align: () => ({ mobile: 'center' }),
})

const contentBlockClasses = computed(() => {
  const breakpoints: Breakpoints[] = ['mobile', 'tablet', 'laptop', 'desktop']

  const alignClasses = breakpoints
    .map(breakpoint => props.align?.[breakpoint]
      ? `content-block--${breakpoint}--align-${props.align[breakpoint]}`
      : null,
    )
    .filter(Boolean)
  const themeClass = props.theme ? `content-block--${props.theme}` : null

  return [...alignClasses, themeClass].filter(Boolean)
})
</script>

<template>
  <div
    class="content-block"
    :class="contentBlockClasses"
  >
    <div
      v-if="headline || heading || description"
      class="content-block__header"
    >
      <HeadlineBadge
        v-if="headline"
        class="content-block__headline"
      >
        {{ headline }}
      </HeadlineBadge>
      <DynamicHeading
        v-if="heading"
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
    <div v-else-if="$slots.header" class="content-block__header">
      <slot name="header" />
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
$header-text-width--max: toRem(750px);

$alignments: (
  left: left,
  center: center,
  right: right,
);

@mixin generate-alignment($breakpoint, $alignments) {
  @each $alignment, $value in $alignments {
    &--#{$breakpoint}--align-#{$alignment} {
      text-align: $value;

      .content-block__header {
        @if $value == left {
          align-items: flex-start;
        } @else if $value == center {
          align-items: center;
        } @else if $value == right {
          align-items: flex-end;
        }
      }
    }
  }
}

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

  @include generate-alignment('mobile', $alignments);

  @include breakpoint('sm') {
    @include generate-alignment('tablet', $alignments);
  }

  @include breakpoint('lg') {
    @include generate-alignment('laptop', $alignments);
  }

  @include breakpoint('xl') {
    @include generate-alignment('desktop', $alignments);
  }

  &--light {
    #{$parent}__heading,
    #{$parent}__description {
      color: $color-white--regular;
    }
  }
}
</style>
