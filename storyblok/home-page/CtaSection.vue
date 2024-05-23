<script setup lang="ts">
import type { CtaSectionStoryblok } from '~/component-types-sb'

interface Props {
  blok: CtaSectionStoryblok
}

const props = defineProps<Props>()

const getSectionDescription = computed(() =>
  renderRichText(props.blok.description))

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

const img = useImage()

const getSectionBackground = computed(() => {
  if (!props.blok.background_image)
    return

  const imgUrl = img(props.blok.background_image.filename, {
    format: 'webp',
  })

  return `url('${imgUrl}')`
})
</script>

<template>
  <BaseSection
    v-editable="blok"
    class="cta-section"
  >
    <div class="cta-section__content">
      <h2 class="cta-section__heading">
        {{ blok.heading }}
      </h2>
      <div
        class="cta-section__description"
        v-html="getSectionDescription"
      />
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
        v-if="blok.image?.filename"
        :src="blok.image.filename"
        :width="1336"
        :height="988"
        :alt="blok.image.alt"
        format="avif,webp"
        sizes="sm:100vw xl:670px"
        loading="lazy"
        class="cta-section__image"
      />
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
$section-padding-y: clamped(
  $min-size: $spacing--4xl,
  $max-size: $spacing--8xl,
);
$section-padding-x: clamped(
  $min-size: $spacing--2xl,
  $max-size: $spacing--12xl,
);
$section-border-radius: clamped(
  $min-size: $rounded--2xl * 2,
  $max-size: $rounded--3xl * 2,
);

.cta-section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: $spacing--4xl;
  padding: $section-padding-y $section-padding-x;
  border-radius: $section-border-radius;
  background: v-bind(getSectionBackground) no-repeat 50% 50% / cover;

  &__content {
    flex: 1 1 convert(400px, 'rem');
  }

  &__image-box {
    flex: 1 1 convert(500px, 'rem');
  }

  &__heading {
    margin: 0;
    color: $color-white--regular;
  }

  &__description {
    margin-top: $spacing--2xl;
    color: $color-white--regular;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: $spacing--2xl;
    margin-top: $spacing--4xl;
  }

  &__email,
  &__button {
    width: 100%;
  }

  &__success-message {
    padding: $spacing--lg $spacing--2xl;
    border-radius: $rounded--lg;
    background-color: $color-white--regular;
  }
}

@include breakpoint('sm') {
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
