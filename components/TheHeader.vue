<script setup lang="ts">
import type { AssetStoryblok, NavItemStoryblok, SubmenuStoryblok } from '~/component-types-sb'

interface Props {
  logo: AssetStoryblok | undefined
  navigation: (NavItemStoryblok | SubmenuStoryblok)[] | null
}

defineProps<Props>()

const isMenuVisible = ref(false)
const toggleMenuVisibility = () => isMenuVisible.value = !isMenuVisible.value
const closeMenu = () => isMenuVisible.value = false

const isSubmenuVisible = ref(false)
const toggleSubmenuVisibility = () => isSubmenuVisible.value = !isSubmenuVisible.value
const openSubmenu = () => isSubmenuVisible.value = true
const closeSubmenu = () => isSubmenuVisible.value = false

function closeMenus() {
  closeMenu()
  closeSubmenu()
}

const route = useRoute()

watch(
  () => route.path,
  () => {
    closeMenus()
  },
)

const navigationRef = ref<HTMLElement | null>(null)
const menuButtonRef = ref<HTMLElement | null>(null)

onClickOutside(navigationRef, () => closeMenus(), { ignore: [menuButtonRef] })

const { isDesktopScreenSize } = useMedia()

function isSubmenuComponent(item: SubmenuStoryblok): boolean {
  return item.component === 'submenu'
}

function handleMouseover(navigationItem: SubmenuStoryblok): void {
  if (isSubmenuComponent(navigationItem) && isDesktopScreenSize.value && !isSubmenuVisible.value)
    openSubmenu()
}

function handleMouseleave(navigationItem: SubmenuStoryblok): void {
  if (isSubmenuComponent(navigationItem) && isDesktopScreenSize.value && isSubmenuVisible.value)
    closeSubmenu()
}
</script>

<template>
  <header class="header">
    <div class="header__head">
      <AppLogoLink
        v-if="logo"
        :src="logo?.filename"
        :width="logo?.meta_data?.width"
        :height="logo?.meta_data?.height"
        :alt="logo?.alt"
      />
    </div>
    <div class="header__main">
      <div class="header__buttons">
        <BaseButton
          color="light-bordered"
          class="header__cart-button"
        >
          Cart (0)
        </BaseButton>
        <BaseButton
          color="dark"
          to="/pricing"
          class="header__cta-button"
        >
          Get Started
        </BaseButton>
        <button
          ref="menuButtonRef"
          type="button"
          class="header__menu-button"
          :class="{ 'header__menu-button--active': isMenuVisible }"
          @click="toggleMenuVisibility"
        >
          <Icon
            name="carbon:menu"
            size="1.75em"
          />
        </button>
      </div>
      <nav
        ref="navigationRef"
        class="navigation header__navigation"
        :class="{
          'header__navigation--open': isMenuVisible,
        }"
      >
        <menu
          v-if="navigation?.length"
          class="navigation__menu"
        >
          <li
            v-for="navigationItem in navigation"
            :key="navigationItem._uid"
            class="navigation__item"
            @mouseover="handleMouseover(navigationItem as SubmenuStoryblok)"
            @mouseleave="handleMouseleave(navigationItem as SubmenuStoryblok)"
          >
            <template v-if="isSubmenuComponent(navigationItem as SubmenuStoryblok)">
              <button
                type="button"
                class="navigation__submenu-button"
                @click="toggleSubmenuVisibility"
              >
                <span>{{ navigationItem.title }}</span><Icon
                  class="navigation__button-icon"
                  name="material-symbols:keyboard-arrow-down"
                  size="1.25em"
                />
              </button>
              <menu
                class="navigation__submenu"
                :class="{
                  'navigation__submenu--open': isSubmenuVisible,
                }"
              >
                <li
                  v-for="submenuNavigationItem in (navigationItem as SubmenuStoryblok).links"
                  :key="submenuNavigationItem._uid"
                  class="navigation__item"
                >
                  <NuxtLink
                    :to="submenuNavigationItem.link.story?.url"
                    class="navigation__link"
                  >
                    {{ submenuNavigationItem.label }}
                  </NuxtLink>
                </li>
              </menu>
            </template>
            <template v-else>
              <NuxtLink
                :to="(navigationItem as NavItemStoryblok).link.story?.url"
                class="navigation__link"
              >
                {{ (navigationItem as NavItemStoryblok).label }}
              </NuxtLink>
            </template>
          </li>
          <li class="navigation__item">
            <button
              type="button"
              class="navigation__cart-button"
            >
              Cart (0)
            </button>
          </li>
        </menu>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  &__head {
    text-align: center;
  }

  &__main {
    position: relative;
    margin-top: $spacing--medium;
  }

  &__buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__cta-button {
    display: none;
  }

  &__menu-button {
    padding: calc($spacing--large / 2);
    border: 1px solid $color-devider--regular;
    border-radius: $border-radius--small;
    color: $color--secondary--extra-dark;
    background-color: $color--secondary--extra-light;

    &--active {
      background-color: $color-primary--dark;
      color: $color-white--regular;
    }
  }

  &__navigation {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    margin-top: $spacing--small;
    padding: $spacing--large;
    z-index: stacking(header);

    &--open {
      display: block;
    }
  }
}

.navigation {
  $parent: &;
  background-color: $color--secondary--extra-light;
  border: 1px solid $color-devider--regular;
  border-radius: $border-radius--large;

  &__menu,
  &__submenu {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  &__submenu {
    display: none;
    max-height: 0;
    padding: $spacing--small 0 $spacing--small $spacing--medium;

    &--open {
      display: block;
      max-height: 100rem;
    }
  }

  &__item {
    position: relative;
    font-weight: $font-weight--semibold;
    font-size: $font-size--small;
  }

  &__link,
  &__submenu-button,
  &__cart-button {
    padding: $spacing--medium;
  }

  &__link {
    display: block;
  }

  &__submenu-button,
  &__cart-button {
    display: block;
    width: 100%;
    text-align: start;
    font-weight: $font-weight--semibold;
    line-height: $line-height--small;
    color: $color-primary--dark;
    background-color: transparent;

    @media (hover: hover) {
      &:hover {
        color: $color-primary--light;
      }
    }
  }

  &__button-icon {
    margin-left: $spacing--xsmall;
  }

  &__cart-button {
    display: none;
  }
}

@include breakpoint('medium') {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__main {
      margin-top: 0;
    }

    &__cart-button,
    &__cta-button {
      margin-right: $spacing--medium;
    }

    &__cta-button {
      display: block;
    }
  }
}

@include breakpoint('large') {
  .header {
    &__main {
      display: flex;
    }

    &__navigation {
      display: block;
      width: auto;
      padding: $spacing--small $spacing--large;
      margin-right: $spacing--xlarge;
    }

    &__buttons {
      justify-content: flex-end;
      order: 2;
    }

    &__cart-button {
      display: none;
    }

    &__cta-button {
      margin-right: 0;
    }

    &__menu-button {
      display: none;
    }
  }

  .navigation {
    $parent: &;
    position: static;
    order: 1;
    margin-top: 0;
    border: none;
    border-radius: $border-radius--2xlarge;

    &__menu {
      display: flex;
      justify-content: space-between;
    }

    &__submenu {
      position: absolute;
      left: -$spacing--medium;
      padding: $spacing--medium;
      background-color: $color--secondary--extra-light;
      border-radius: $border-radius--small;
    }

    &__cart-button {
      display: block;
    }
  }
}
</style>
