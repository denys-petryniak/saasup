<script setup lang="ts">
import type { Footer, Header } from '~/types'
import type { ConfigStoryblok } from '~/component-types-sb'

const header = ref<Header | null>(null)
const footer = ref<Footer | null>(null)

const { version: storyVersion } = useStoryVersion()

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
</script>

<template>
  <BaseContainer class="layout">
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
