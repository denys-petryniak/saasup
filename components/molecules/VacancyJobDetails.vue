<script setup lang="ts">
interface Props {
  location: string
  employment: string
}

defineProps<Props>()
</script>

<template>
  <div class="job-details">
    <span class="job-details__location">{{ location }}</span>
    <span class="job-details__separator">|</span>
    <span class="job-details__employment">{{ employment }}</span>
  </div>
</template>

<style scoped lang="scss">
.job-details {
  font-size: $text--xl;
  font-weight: $font--medium;

  &__separator {
    display: none;

    @include breakpoint('sm') {
      display: inline-block;
      margin: 0 $spacing--sm;
    }
  }

  &__location,
  &__employment {
    display: block;
    line-height: $leading--relaxed;

    @include breakpoint('sm') {
      display: inline;
      line-height: $leading--cozy;
    }
  }

  &__location {
    color: $primary-color--dark;
  }

  &__employment {
    color: $primary-color--light;
  }
}
</style>
