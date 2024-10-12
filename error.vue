<script setup lang="ts">
const error = useError()
const localePath = useLocalePath()

function handleError() {
  clearError({
    redirect: localePath('/'),
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
          $t('message.not-found')
        </h2>
      </div>
      <div v-else>
        <h1 class="error__title">
          $t('message.error_dang')
        </h1>
        <h2 class="error__subtitle">
          $t('message.error')
        </h2>
      </div>
      <div>
        <p class="error__message">
          {{ error.statusMessage }}
        </p>
        <BaseButton class="error__button" @click="handleError">
          $t('button.home')
        </BaseButton>
      </div>
    </BaseSection>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.error {
  text-align: center;

  &__title {
    @include fluid-typography($min-font-size: $text--8xl, $max-font-size: $text--8xl * 3);
    line-height: $leading--none;
    font-weight: $font--extrabold;
    color: $primary-color--light;
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
    color: $primary-color--dark;
  }

  &__button {
    margin-top: $spacing--xl;
  }
}
</style>
