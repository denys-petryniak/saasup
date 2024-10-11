<script setup lang="ts">
interface Props {
  title: string
  description: string
}

defineProps<Props>()

const localePath = useLocalePath()
</script>

<template>
  <div class="card">
    <h3 class="card__title">
      {{ title }}
    </h3>
    <div class="card__description">
      {{ description }}
    </div>
    <BaseButton
      :to="localePath('/careers')"
      size="md"
      color="light"
      class="card__button"
    >
      {{ $t('button.view_jobs') }}
    </BaseButton>
  </div>
</template>

<style scoped lang="scss">
.card {
  padding: clamped($min-size: $spacing--8xl, $max-size: $spacing--12xl);
  border: 1px solid $divider-color--regular;
  border-radius: $rounded--3xl;
  text-align: center;
  background-color: $primary-color--light;

  &__title,
  &__description {
    color: $color-white--soft;
  }

  &__title {
    margin-top: 0;
  }

  &__description {
    margin: $spacing--2xl 0 0 0;
  }

  &__button {
    margin-top: $spacing--4xl;
  }
}
</style>
