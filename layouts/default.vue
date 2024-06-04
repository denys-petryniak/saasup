<script setup lang="ts">
import type { Footer, Header } from '~/types'
import type { ConfigStoryblok } from '~/component-types-sb'

const header = ref<Header | null>(null)
const footer = ref<Footer | null>(null)

const storyVersion = getStoryVersion()

try {
  const storyblokApi = useStoryblokApi()
  const { data } = await storyblokApi.get('cdn/stories/config', {
    version: storyVersion,
    resolve_links: 'url',
  })

  const content: ConfigStoryblok = data.story.content

  header.value = {
    logo: content.header_logo,
    navigation: content.header_nav,
  }

  footer.value = {
    headline: content.footer_nav_headline,
    description: content.footer_description,
    copyright: content.footer_copyright_text,
    navigation: content.footer_nav,
    emails: content.footer_emails,
    phones: content.footer_phones,
    socialLinks: content.footer_social_links,
    widget: {
      label: content.download_widget_label,
      title: content.download_widget_title,
      description: content.download_widget_description,
      buttons: content.download_widget_buttons,
    },
  }
}
catch (error) {
  console.error('An error occurred:', error)
}

const route = useRoute()
const isHomePage = computed(() => route.path === '/')
const isContactsPage = computed(() => route.path.includes('contacts'))

const img = useImage()
const backgroundPatterns = [
  img('https://a.storyblok.com/f/245408/1920x726/299c1fb920/background-pattern-1.png', { format: 'webp' }),
  img('https://a.storyblok.com/f/245408/2772x1410/c0188ada5b/background-pattern-2_2x.png', { format: 'webp' }),
  img('https://a.storyblok.com/f/245408/1410x3194/94ae293ecb/background-pattern-3_2x.png', { format: 'webp' }),
]

const getLayoutBackground = computed(() => {
  const baseStyle = `url('${backgroundPatterns[0]}') no-repeat top right/contain`

  if (isHomePage.value) {
    return `url('${backgroundPatterns[1]}') no-repeat top right/65%, ${baseStyle}`
  }

  if (isContactsPage.value) {
    return `url('${backgroundPatterns[2]}') no-repeat top right/contain, ${baseStyle}`
  }

  return baseStyle
})
</script>

<template>
  <div class="layout">
    <TheHeader
      v-if="header"
      :header="header"
      class="layout__header"
    />
    <main class="layout__body">
      <slot />
    </main>
    <TheFooter
      v-if="footer"
      :footer="footer"
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
