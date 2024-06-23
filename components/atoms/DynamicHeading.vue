<script setup lang="ts">
import type { HeadingTag } from '~/types'

interface Props {
  as?: HeadingTag
}

withDefaults(defineProps<Props>(), {
  as: 'h1',
})
</script>

<template>
  <component
    :is="as"
  >
    <slot />
  </component>
</template>

<style lang="scss">
h1 {
  @include fluid-typography(
    $min-font-size: $text--4xl,
    $max-font-size: $text--7xl,
    $min-line-height: $leading--none,
    $max-line-height: $leading--tight
  );
}

h2 {
  @include fluid-typography(
    $min-font-size: $text--3xl,
    $max-font-size: $text--5xl,
    $min-line-height: $leading--tight,
    $max-line-height: $leading--condensed
  );
}

h3 {
  @include fluid-typography(
    $min-font-size: $text--2xl,
    $max-font-size: $text--3xl,
    $min-line-height: $leading--tight,
    $max-line-height: $leading--condensed
  );
}

h4 {
  @include fluid-typography(
    $min-font-size: $text--2xl,
    $max-font-size: $text--3xl,
    $min-line-height: $leading--condensed,
    $max-line-height: $leading--snug
  );
}

h5 {
  @include fluid-typography(
    $min-font-size: $text--xl,
    $max-font-size: $text--2xl,
    $min-line-height: $leading--tight,
    $max-line-height: $leading--condensed
  );
}

h6 {
  @include fluid-typography(
    $min-font-size: $text--lg,
    $max-font-size: $text--xl,
    $min-line-height: $leading--tight,
    $max-line-height: $leading--condensed
  );
}
</style>
