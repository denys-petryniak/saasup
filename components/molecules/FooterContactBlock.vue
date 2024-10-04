<script setup lang="ts">
import type { LinkStoryblok } from '~/component-types-sb'
import type { LinkType } from '~/types'

interface Props {
  linkType: LinkType
  iconName: string
  links: LinkStoryblok[]
}

defineProps<Props>()
</script>

<template>
  <div class="contact-block">
    <Icon
      class="contact-block__icon"
      :name="iconName"
      size="1.25em"
    />
    <div class="contact-block__links">
      <NuxtLink
        v-for="linkItem in links"
        :key="linkItem._uid"
        :to="resolveLinkUrl(linkItem.link, linkType)"
        class="contact-block__link"
      >
        {{ linkItem.label }}
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact-block {
  display: flex;
  gap: $spacing--lg;

  &:not(:first-child) {
    margin-top: $spacing--lg;
  }

  &__icon {
    position: relative;
    top: $spacing--sm;
    color: $primary-color--light;
  }

  &__link {
    display: block;
    color: $secondary-color--dark;

    &:hover {
      color: $primary-color--light;
    }
  }
}
</style>
