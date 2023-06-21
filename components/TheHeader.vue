<script setup lang="ts">
const { isLaptop, isDesktop } = useMedia()

const navigationLinks = ref([
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

const route = useRoute()
watch(route, () => {
  closeMenu()
})

const navigation = ref(null)
const menuButton = ref(null)

onClickOutside(navigation, () => closeMenu(), { ignore: [menuButton] })
</script>

<template>
  <header class="header">
    <div class="header__head">
      <NuxtLink
        class="header__logo-link"
        to="/"
      >
        <img
          class="header__logo"
          src="@/assets/images/saasup-logo.svg"
          alt="SaaSup logo"
        >
      </NuxtLink>
    </div>
    <div class="header__main">
      <div class="header__buttons">
        <BaseButton
          v-show="!isDesktop"
          class="header__cart-button"
          type="button"
        >
          Cart (0)
        </BaseButton>
        <BaseButton
          v-show="isLaptop || isDesktop"
          class="header__cta-button"
          type="button"
        >
          Get Started
        </BaseButton>
        <BaseButton
          v-show="!isDesktop"
          ref="menuButton"
          class="header__menu-button"
          :class="{ 'header__menu-button--active': isMenuVisible }"
          type="button"
          @click="toggleMenuVisibility"
        >
          Menu
        </BaseButton>
      </div>
      <nav
        v-show="isMenuVisible || isDesktop"
        ref="navigation"
        class="header__navigation navigation"
      >
        <menu v-if="navigationLinks.length" class="navigation__menu">
          <li
            v-for="navigationLink in navigationLinks"
            :key="navigationLink.text"
            class="navigation__item"
            :class="{ 'navigation__item--inactive': navigationLink.submenu }"
            :tabindex="navigationLink.submenu ? 0 : undefined"
          >
            <template v-if="navigationLink.submenu?.length">
              <div class="navigation__link-text">
                {{ navigationLink.text }}
              </div>
              <menu class="navigation__submenu">
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
            v-show="isDesktop"
            class="header__cart-button"
            type="button"
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
    font-size: 0;
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

  &__cart-button {
    background-color: $color--secondary--extra-light;
  }

  &__menu-button {
    background-color: $color--secondary--extra-light;
    border-radius: $border-radius--medium;

    &--active {
      background-color: $color-primary--dark;
      color: $color-white--regular;
    }
  }

  &__navigation {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    margin-top: $spacing--small;
    padding: $spacing--large;
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
    padding-left: $spacing--medium;
    visibility: hidden;
    max-height: 0;
    transform: translateY(-1em);
    transition: transform ease 0.3s;
  }

  &__item {
    font-weight: $font-weight--semibold;
    font-size: $font-size--medium;

    &--inactive {
      position: relative;

      &:hover #{$parent}__submenu,
      &:focus-within #{$parent}__submenu {
        padding-top: $spacing--medium;
        padding-bottom: $spacing--medium;
        visibility: visible;
        max-height: 100%;
        // max-height: 100em;
        transform: translateY(0);
      }
    }
  }

  &__link {
    display: block;
    text-decoration: none;

    &:not(.router-link-exact-active) {
      color: $color-primary--dark;
    }

    &:hover {
      color: $color-primary--light;
    }
  }

  &__link,
  &__link-text {
    padding: $spacing--medium;
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
      background-color: $color-primary--dark;
      color: $color-white--regular;
      border: 1px solid $color-border--regular;

      &:hover {
        background-color: $color--secondary--extra-light;
        color: $color-primary--dark;
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
      width: auto;
      padding: $spacing--small $spacing--large;
      margin-right: $spacing--xlarge;
    }

    &__buttons {
      justify-content: flex-end;
      order: 2;
    }

    &__cart-button {
      padding: $spacing--medium;
      margin-right: 0;
    }

    &__cta-button {
      margin-right: 0;
    }
  }

  .navigation {
    position: static;
    // top: 0;
    order: 1;
    margin-top: 0;
    border-radius: $border-radius--xxlarge;

    &__menu {
      display: flex;
      justify-content: space-between;
    }

    &__submenu {
      position: absolute;
      left: -$spacing--medium;
      padding: $spacing--medium;
      // padding-left: 0;
      // padding-bottom: 0;
      background-color: $color--secondary--extra-light;
      border-radius: $border-radius--small;
    }

    &__link-text {
      position: relative;
      display: inline-block;
    }
  }
}
</style>
