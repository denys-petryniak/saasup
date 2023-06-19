<script setup lang="ts">
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
      <BaseButton
        class="header__cart-button"
        type="button"
      >
        Cart
      </BaseButton>
      <BaseButton
        ref="menuButton"
        class="header__menu-button"
        type="button"
        @click="toggleMenuVisibility"
      >
        Menu
      </BaseButton>
      <nav v-if="isMenuVisible" ref="navigation" class="header__navigation navigation">
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
              <NuxtLink tag="div" class="navigation__link" :to="navigationLink.to">
                {{ navigationLink.text }}
              </NuxtLink>
            </template>
          </li>
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: $spacing--small;
  }

  &__cart-button {
    background-color: $color--secondary--extra-light;
  }

  &__menu-button {
    background-color: $color--secondary--extra-light;
    border-radius: $border-radius--medium;
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
      &:hover #{$parent}__submenu,
      &:focus-within #{$parent}__submenu {
        padding-top: $spacing--medium;
        padding-bottom: $spacing--medium;
        visibility: visible;
        max-height: 100%;
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
</style>
