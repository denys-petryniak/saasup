<script setup lang="ts">
const { config } = useFetchConfig()

const route = useRoute()
const localePath = useLocalePath()
const isHomePage = computed(() => route.path === localePath('/'))
const isContactsPage = computed(() => route.path.includes('contacts'))

const img = useImage()
const backgroundPatterns = [
  img('https://a2.storyblok.com/f/245408/1920x726/299c1fb920/background-pattern-1.png', { format: 'webp' }),
  img('https://a2.storyblok.com/f/245408/2772x1410/c0188ada5b/background-pattern-2_2x.png', { format: 'webp' }),
  img('https://a2.storyblok.com/f/245408/1410x3194/94ae293ecb/background-pattern-3_2x.png', { format: 'webp' }),
]

const getLayoutBackground = computed(() => {
  const baseStyle = `url('${backgroundPatterns[0]}') no-repeat top right/contain`

  if (isHomePage.value) {
    return `url('${backgroundPatterns[1]}') no-repeat top right/65%, ${baseStyle}`
  }

  if (isContactsPage.value) {
    return `url('${backgroundPatterns[2]}') no-repeat top right/35%, ${baseStyle}`
  }

  return baseStyle
})
</script>

<template>
  <div class="layout">
    <TheHeader
      v-if="config?.header_nav"
      :config="config"
      class="layout__header"
    />
    <main class="layout__body">
      <slot />
    </main>
    <TheFooter
      v-if="config?.footer_nav"
      :config="config"
      class="layout__footer"
    />
  </div>
</template>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;

  @include breakpoint('lg') {
    background: v-bind(getLayoutBackground);
  }

  &__header,
  &__footer {
    flex-shrink: 0;
  }

  &__body {
    flex-grow: 1;
  }
}
</style>
