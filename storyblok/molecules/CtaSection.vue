<script setup lang="ts">
import type { CtaSectionStoryblok } from '~/component-types-sb'

interface Props {
  blok: CtaSectionStoryblok
}

const props = defineProps<Props>()

const sectionDescription = computed(() =>
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

const sectionBackground = computed(() => {
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
    <div class="cta-section__body">
      <ContentBlock
        v-if="blok.heading"
        :heading="blok.heading"
        :heading-level="blok.heading_level"
        theme="light"
        class="cta-section__content"
      >
        <div class="cta-section__description" v-html="sectionDescription" />
        <template #footer>
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
              aria-label="Email field"
            />
            <BaseButton
              type="submit"
              color="light"
              class="cta-section__button"
            >
              Subscribe
            </BaseButton>
          </form>
        </template>
      </ContentBlock>
      <div v-if="blok.image?.filename" class="cta-section__image-box">
        <NuxtImg
          :src="blok.image.filename"
          :width="1336"
          :height="988"
          :alt="blok.image.alt"
          sizes="100vw lg:50vw"
          loading="lazy"
          class="cta-section__image"
        />
      </div>
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
  &__body {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: clamped($min-size: $spacing--4xl, $max-size: $spacing--8xl);
    padding: $section-padding-y $section-padding-x;
    border-radius: $section-border-radius;
    background: v-bind(sectionBackground) no-repeat 50% 50% / cover;

    @include breakpoint('lg') {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__description {
    color: $color-white--regular;
  }

  &__form {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing--2xl;
  }

  &__email {
    width: 100%;
    flex: 2 1 toRem(300px);
  }

  &__button {
    flex: 1 1 toRem(180px);
  }

  &__success-message {
    padding: $spacing--lg $spacing--2xl;
    border-radius: $rounded--lg;
    background-color: $color-white--regular;
  }
}
</style>
