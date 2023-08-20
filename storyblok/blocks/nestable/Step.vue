<script setup lang="ts">
const props = defineProps({ blok: Object })

const getDescription = computed(() =>
  renderRichText(props.blok.description),
)
</script>

<template>
  <div
    v-editable="blok"
    class="step"
  >
    <div class="step__main">
      <div class="step__head">
        <img
          v-if="blok.icon?.filename"
          :src="blok.icon.filename"
          :width="116"
          :height="116"
          :alt="blok.icon.alt"
          loading="lazy"
          class="step__icon"
        >
        <h3 class="step__title">
          {{ blok.heading }}
        </h3>
      </div>
      <div v-html="getDescription" />
      <BaseButton
        color="dark"
        class="step__button"
      >
        Get Started
      </BaseButton>
    </div>
    <div class="step__image-box">
      <NuxtImg
        v-if="blok.image?.filename"
        :src="blok.image.filename"
        :width="602"
        :height="339"
        :alt="blok.image.alt"
        format="avif,webp"
        sizes="sm:100vw xl:602px"
        loading="lazy"
        class="step__image"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.step {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing--2xlarge;
  margin-top: clamped($min-size: $spacing--2xlarge, $max-size: $spacing--3xlarge);
  padding: 0 clamped($min-size: $spacing--xsmall, $max-size: $spacing--3xlarge);

  &__main {
    flex: 1 1 convert(500px, 'rem');
  }

  &__image-box {
    flex: 1 1 convert(500px, 'rem');
  }

  &__head {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing--large;
  }

  &__title {
    margin: 0;
    max-width: convert(500px, 'rem');
    flex: 1 1 convert(350px, 'rem');
  }

  &__button {
    display: block;
    margin-top: $spacing--xlarge;
  }

  &__image {
    border-radius: $border-radius--xlarge;
  }
}
</style>
