<script setup lang="ts">
import type { AssetStoryblok, ConfigStoryblok, NavItemStoryblok, SubmenuStoryblok } from '~/component-types-sb'

const headerNavigation = ref<(NavItemStoryblok | SubmenuStoryblok)[] | null>(null)
const headerLogo = ref<AssetStoryblok | undefined>(undefined)

try {
  const storyblokApi = useStoryblokApi()
  const { data } = await storyblokApi.get('cdn/stories/config', {
    version: 'draft',
    resolve_links: 'url',
  })

  const content: ConfigStoryblok = data.story.content

  headerLogo.value = content.header_logo
  headerNavigation.value = content.header_nav
}
catch (error) {
  console.error('An error occurred:', error)
}
</script>

<template>
  <BaseContainer class="layout">
    <TheHeader
      :logo="headerLogo"
      :navigation="headerNavigation"
      class="layout__header"
    />
    <main class="layout__body">
      <slot />
    </main>
    <TheFooter class="layout__footer" />
  </BaseContainer>
</template>

<style scoped lang="scss">
  .layout {
    display: flex;
    flex-direction: column;

    &__header,
    &__footer {
      flex-shrink: 0;
    }

    &__body {
      flex-grow: 1;
    }
  }
</style>
