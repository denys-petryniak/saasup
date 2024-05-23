<script setup lang="ts">
const error = useError()

function handleError() {
  clearError({
    redirect: '/',
  })
}
</script>

<template>
  <NuxtLayout>
    <BaseSection v-if="error" class="error">
      <div v-if="error.statusCode === 404">
        <h1 class="error__title">
          404
        </h1>
        <h2 class="error__subtitle">
          Page doesn't exist
        </h2>
      </div>
      <div v-else>
        <h1 class="error__title">
          Dang
        </h1>
        <h2 class="error__subtitle">
          It looks like something broke
        </h2>
      </div>
      <div>
        <p class="error__message">
          {{ error.statusMessage }}
        </p>
        <BaseButton class="error__button" @click="handleError">
          Home Page
        </BaseButton>
      </div>
    </BaseSection>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.error {
  text-align: center;

  &__title {
    @include fluid-typography(
      $min-font-size: $text--8xl,
      $max-font-size: $text--8xl * 3,
      $min-line-height: $leading--none,
      $max-line-height: $leading--none
    );
    font-weight: $font--extrabold;
    color: $color-primary--light;
    text-shadow: 0 6px 6px rgba(82, 54, 255, 0.22);
  }

  &__subtitle {
    @include fluid-typography(
      $min-font-size: $text--4xl,
      $max-font-size: $text--7xl,
      $min-line-height: $leading--tight,
      $max-line-height: $leading--condensed
    );
    font-weight: $font--extrabold;
    color: $color-primary--dark;
  }

  &__button {
    margin-top: $spacing--xl;
  }
}
</style>
