<script setup lang="ts">
import type { Image } from '~/types'

interface Props {
  title: string
  description: string
  image: Image
}

defineProps<Props>()

const formData = reactive({
  email: '',
})

const isSuccess = ref(false)

function submitForm() {
  if (formData.email) {
    // eslint-disable-next-line no-console
    console.log('Form submitted', formData.email)

    isSuccess.value = true
    formData.email = ''
  }
}
</script>

<template>
  <BaseSection class="cta-section">
    <div class="cta-section__content">
      <h2 class="cta-section__title">
        {{ title }}
      </h2>
      <p class="cta-section__description">
        {{ description }}
      </p>
      <div
        v-if="isSuccess"
        class="cta-section__success-message"
      >
        Thank you! Your submission has been received!
      </div>
      <form
        v-else
        class="cta-section__form"
        @submit.prevent="submitForm"
      >
        <BaseInput
          v-model="formData.email"
          type="email"
          name="email"
          placeholder="Your Email Here"
          maxlength="256"
          required
          class="cta-section__email"
        />
        <BaseButton
          type="submit"
          color="light"
          class="cta-section__button"
        >
          Subscribe
        </BaseButton>
      </form>
    </div>
    <div class="cta-section__image-box">
      <NuxtImg
        v-if="image.src"
        :src="image.src"
        :width="image.width"
        :height="image.height"
        :alt="image.alt"
        format="avif,webp"
        sizes="sm:100vw xl:670px"
        loading="lazy"
        class="cta-section__image"
      />
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
$section-padding-y: clamped($min-size: $spacing--xlarge, $max-size: $spacing--2xlarge);
$section-padding-x: clamped($min-size: $spacing--large, $max-size: $spacing--3xlarge);

.cta-section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: $spacing--xlarge;
  padding: $section-padding-y $section-padding-x;
  border-radius: clamped($min-size: $border-radius--2xlarge, $max-size: $border-radius--3xlarge);
  background: url('/images/main-page/cta-bg.png') no-repeat 50% 50%/cover;

  &__content {
    flex: 1 1 convert(400px, 'rem');
  }

  &__image-box {
    flex: 1 1 convert(500px, 'rem');
  }

  &__title {
    margin: 0;
    color: $color-white--regular;
  }

  &__description {
    margin-top: $spacing--large;
    color: $color-white--regular;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: $spacing--large;
    margin-top: $spacing--xlarge;
  }

  &__email,
  &__button {
    width: 100%;
  }

  &__success-message {
    padding: $spacing--medium $spacing--large;
    border-radius: $border-radius--small;
    background-color: $color-white--regular;
  }
}

@include breakpoint('small') {
  .cta-section {
    &__form {
      flex-direction: row;
    }

    &__email,
    &__button {
      width: auto;
    }

    &__email {
      flex: 1;
    }
  }
}
</style>
