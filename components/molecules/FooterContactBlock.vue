<script setup lang="ts">
import type { LinkStoryblok, MultilinkStoryblok } from '~/component-types-sb'

interface Props {
  type: string
  iconName: string
  links: LinkStoryblok[] | null
}

const props = defineProps<Props>()

function getLinkUrl(link: MultilinkStoryblok): string {
  if (props.type === 'email')
    return `mailto:${link.email}`

  if (props.type === 'phone')
    return `tel:${link.url}`

  return link.url
}
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
        :to="getLinkUrl(linkItem.link)"
        no-rel
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
    color: $color-primary--light;
  }

  &__link {
    display: block;
    color: $color--secondary--dark;

    &:hover {
      color: $color-primary--light;
    }
  }
}
</style>
