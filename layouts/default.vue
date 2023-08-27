<script setup lang="ts">
import type { FooterData, HeaderData } from 'types'
import type {
  ConfigStoryblok,
} from '~/component-types-sb'

const headerData: HeaderData = reactive({
  navigation: null,
  logo: undefined,
})

const footerData: FooterData = reactive({
  headline: null,
  description: null,
  copyright: null,
  navigation: null,
  emails: null,
  phones: null,
  socialLinks: null,
  widgetLabel: null,
  widgetTitle: null,
  widgetDescription: null,
  widgetButtons: null,
})

const getStoryVersion = computed(() => {
  // eslint-disable-next-line n/prefer-global/process
  return process.env.NODE_ENV === 'development'
    ? 'draft'
    : 'published'
})

try {
  const storyblokApi = useStoryblokApi()
  const { data } = await storyblokApi.get('cdn/stories/config', {
    version: getStoryVersion.value,
    resolve_links: 'url',
  })

  const content: ConfigStoryblok = data.story.content

  headerData.logo = content.header_logo
  headerData.navigation = content.header_nav

  footerData.headline = content.footer_nav_headline
  footerData.description = content.footer_description
  footerData.copyright = content.footer_copyright_text
  footerData.navigation = content.footer_nav
  footerData.emails = content.footer_emails
  footerData.phones = content.footer_phones
  footerData.socialLinks = content.footer_social_links
  footerData.widgetLabel = content.download_widget_label
  footerData.widgetTitle = content.download_widget_title
  footerData.widgetDescription = content.download_widget_description
  footerData.widgetButtons = content.download_widget_buttons
}
catch (error) {
  console.error('An error occurred:', error)
}
</script>

<template>
  <BaseContainer class="layout">
    <TheHeader
      :data="headerData"
      class="layout__header"
    />
    <main class="layout__body">
      <slot />
    </main>
    <TheFooter
      :data="footerData"
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
