<script setup lang="ts">
interface NavigationLink {
  to?: string
  text: string
  submenu?: NavigationLink[]
}

const navigationLinks = ref<NavigationLink[]>([
  {
    to: '/',
    text: 'Home',
  },
  {
    to: '/about',
    text: 'About',
  },
  {
    text: 'Pages',
    submenu: [
      {
        to: '/features',
        text: 'Features',
      },
      {
        to: '/pricing',
        text: 'Pricing',
      },
      {
        to: '/integrations',
        text: 'Integrations',
      },
      {
        to: '/blog',
        text: 'Blog',
      },
      {
        to: '/careers',
        text: 'Careers',
      },
    ],
  },
  {
    to: '/contacts',
    text: 'Contacts',
  },
])

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
watch(route, () => {
  closeMenus()
})

const navigation = ref<HTMLElement | null>(null)
const menuButton = ref<HTMLElement | null>(null)

onClickOutside(navigation, () => closeMenus(), { ignore: [menuButton] })

const { isDesktop } = useMedia()

function handleMouseover(navigationLink: NavigationLink): void {
  if (navigationLink.submenu && isDesktop.value && !isSubmenuVisible.value)
    openSubmenu()
}

function handleMouseleave(navigationLink: NavigationLink): void {
  if (navigationLink.submenu && isDesktop.value && isSubmenuVisible.value)
    closeSubmenu()
}
</script>

<template>
  <header class="header">
    <div class="header__head">
      <AppLogoLink />
    </div>
    <div class="header__main">
      <div class="header__buttons">
        <BaseButton
          class="header__cart-button"
        >
          Cart (0)
        </BaseButton>
        <BaseButton
          class="header__cta-button"
        >
          Get Started
        </BaseButton>
        <BaseButton
          ref="menuButton"
          class="header__menu-button"
          :class="{ 'header__menu-button--active': isMenuVisible }"
          @click="toggleMenuVisibility"
        >
          <Icon name="carbon:menu" size="1.25em" />
        </BaseButton>
      </div>
      <nav
        ref="navigation"
        class="navigation header__navigation"
        :class="{
          'header__navigation--open': isMenuVisible,
        }"
      >
        <menu v-if="navigationLinks.length" class="navigation__menu">
          <li
            v-for="navigationLink in navigationLinks"
            :key="navigationLink.text"
            class="navigation__item"
            @mouseover="handleMouseover(navigationLink)"
            @mouseleave="handleMouseleave(navigationLink)"
          >
            <template v-if="navigationLink.submenu?.length">
              <button
                type="button"
                class="navigation__button"
                @click="toggleSubmenuVisibility"
              >
                <span>{{ navigationLink.text }}</span><Icon class="navigation__button-icon" name="material-symbols:keyboard-arrow-down" size="1.25em" />
              </button>
              <menu
                class="navigation__submenu"
                :class="{
                  'navigation__submenu--open': isSubmenuVisible,
                }"
              >
                <li
                  v-for="submenuNavigationLink in navigationLink.submenu"
                  :key="submenuNavigationLink.text"
                  class="navigation__item"
                >
                  <NuxtLink class="navigation__link" :to="submenuNavigationLink.to">
                    {{ submenuNavigationLink.text }}
                  </NuxtLink>
                </li>
              </menu>
            </template>
            <template v-else>
              <NuxtLink class="navigation__link" :to="navigationLink.to">
                {{ navigationLink.text }}
              </NuxtLink>
            </template>
          </li>
          <BaseButton
            class="navigation__cart-button"
          >
            Cart (0)
          </BaseButton>
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
    border-radius: $border-radius--medium;

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
    z-index: 5; // TODO: create variable for it

    &--open {
      display: block;
    }
  }
}

.navigation {
  $parent: &;
  background-color: $color--secondary--extra-light;
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
    padding: $spacing--large 0 0 $spacing--medium;

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
  &__button {
    padding: $spacing--medium;
  }

  &__link {
    display: block;
    color: $color-primary--dark;

    @media (hover: hover) {
      &:hover {
        color: $color-primary--light;
      }
    }
  }

  &__button {
    display: block;
    width: 100%;
    text-align: start;
    font-weight: $font-weight--semibold;
    line-height: $line-height--small;
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

@include breakpoint(medium) {
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
      color: $color-white--regular;
      background-color: $color-primary--dark;
      border: 1px solid $color-border--regular;

      @media (hover: hover) {
        &:hover {
          background-color: $color--secondary--extra-light;
          color: $color-primary--dark;
        }
      }
    }
  }
}

@include breakpoint(large) {
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
      padding: $spacing--medium;
      margin-right: 0;
      background-color: transparent;
    }
  }
}
</style>
