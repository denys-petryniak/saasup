<script setup lang="ts">
import type { TabbedContentEntryStoryblok } from '~/component-types-sb'

interface Props {
  blok: TabbedContentEntryStoryblok
}

const props = defineProps<Props>()

const description = computed(() => renderRichText(props.blok.description))
</script>

<template>
  <div
    v-editable="blok"
    class="tabbed-content-entry"
  >
    <ContentBlock :align="{ mobile: 'left' }">
      <template #header>
        <div class="tabbed-content-entry__heading-box">
          <img
            v-if="blok.icon?.filename"
            :src="blok.icon.filename"
            :width="116"
            :height="116"
            alt=""
            loading="lazy"
          >
          <DynamicTitle
            :as="blok.heading_level ?? 'h3'"
            class="tabbed-content-entry__heading"
          >
            {{ blok.heading }}
          </DynamicTitle>
        </div>
      </template>
      <template #default>
        <div v-html="description" />
      </template>
      <template #footer>
        <BaseButton to="/pricing" color="dark">
          {{ $t('get_started') }}
        </BaseButton>
      </template>
    </ContentBlock>
    <div
      v-if="blok.image?.filename"
      class="tabbed-content-entry__image-box"
    >
      <NuxtImg
        :src="blok.image.filename"
        :width="602"
        :height="339"
        :alt="blok.image.alt"
        sizes="100vw lg:50vw"
        loading="lazy"
        class="tabbed-content-entry__image"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.tabbed-content-entry {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamped($min-size: $spacing--4xl, $max-size: $spacing--8xl);
  margin-top: clamped($min-size: $spacing--8xl, $max-size: $spacing--12xl);
  padding: 0 clamped($min-size: $spacing--xs, $max-size: $spacing--12xl);

  @include breakpoint('lg') {
    grid-template-columns: repeat(2, 1fr);
  }

  &__heading-box {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing--2xl;
  }

  &__heading {
    margin: 0;
    flex: 1 1 toRem(300px);
  }

  &__image {
    border-radius: calc($rounded--2xl * 2);
    box-shadow: $shadow--regular;
  }
}
</style>
