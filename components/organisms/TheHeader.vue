<script setup lang="ts">
import type { ConfigStoryblok, LinkStoryblok, SubmenuStoryblok } from '~/component-types-sb'

interface Props {
  config: ConfigStoryblok
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

const navigationRef = useTemplateRef<HTMLElement>('navigationRef')
const menuButtonRef = useTemplateRef<HTMLElement>('menuButtonRef')

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

const { totalCartItems } = useCart()

const isCartModalVisible = ref(false)

function openModal() {
  isCartModalVisible.value = true
}

function closeModal() {
  isCartModalVisible.value = false
}

provide(modalInjectionKey, {
  visible: isCartModalVisible,
  close: closeModal,
})

const localePath = useLocalePath()
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})
</script>

<template>
  <BaseContainer>
    <header class="header">
      <div class="header__head">
        <AppLogoLink
          v-if="config.header_logo"
          :src="getStoryblokImageUrl(config.header_logo.filename)"
          :width="config.header_logo.meta_data?.width"
          :height="config.header_logo.meta_data?.height"
          :alt="config.header_logo.alt"
        />
      </div>
      <div class="header__main">
        <div class="header__buttons">
          <ClientOnly>
            <template #default>
              <BaseButton
                color="light-bordered"
                class="header__cart-button u-hidden-from-lg"
                @click="openModal"
              >
                {{ $t('cart.name') }} (<span class="navigation__cart-button-count">{{ totalCartItems }}</span>)
              </BaseButton>
            </template>
            <template #placeholder>
              <BaseButton
                color="light-bordered"
                class="header__cart-button u-hidden-from-lg"
                disabled
              >
                {{ $t('cart.name') }} (0)
              </BaseButton>
            </template>
          </ClientOnly>
          <BaseButton
            :to="localePath('/pricing')"
            color="dark"
            class="header__cta-button u-visible-from-md"
          >
            {{ $t('button.get_started') }}
          </BaseButton>
          <button
            ref="menuButtonRef"
            type="button"
            class="header__menu-button u-hidden-from-lg"
            :class="{ 'header__menu-button--active': isMenuVisible }"
            aria-label="Toggle menu"
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
          aria-label="Secondary"
        >
          <ul
            v-if="config.header_nav"
            class="navigation__menu"
          >
            <li
              v-for="navigationItem in config.header_nav"
              :key="navigationItem._uid"
              class="navigation__item"
              @mouseover="handleMouseover(navigationItem as SubmenuStoryblok)"
              @mouseleave="handleMouseleave(navigationItem as SubmenuStoryblok)"
            >
              <template v-if="isSubmenuComponent(navigationItem as SubmenuStoryblok)">
                <button
                  type="button"
                  class="navigation__submenu-button"
                  :aria-label="`Toggle submenu for ${navigationItem.title}`"
                  @click="toggleSubmenuVisibility"
                >
                  <span>{{ navigationItem.title }}</span>
                  <Icon
                    name="material-symbols:keyboard-arrow-down"
                    size="1.25em"
                  />
                </button>
                <ul
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
                      :to="localePath(getNavigationSlug(submenuNavigationItem))"
                      class="navigation__link"
                    >
                      {{ submenuNavigationItem.label }}
                    </NuxtLink>
                  </li>
                </ul>
              </template>
              <template v-else>
                <NuxtLink
                  :to="localePath(getNavigationSlug(navigationItem as LinkStoryblok))"
                  class="navigation__link"
                >
                  {{ (navigationItem as LinkStoryblok).label }}
                </NuxtLink>
              </template>
            </li>
            <li class="navigation__item">
              <ClientOnly>
                <template #default>
                  <button
                    type="button"
                    class="navigation__cart-button u-visible-from-lg"
                    @click="openModal"
                  >
                    {{ $t('cart.name') }} (<span class="navigation__cart-button-count">{{ totalCartItems }}</span>)
                  </button>
                </template>
                <template #placeholder>
                  <button
                    type="button"
                    class="navigation__cart-button u-visible-from-lg"
                    disabled
                  >
                    {{ $t('cart.name') }} (0)
                  </button>
                </template>
              </ClientOnly>
            </li>
            <li
              v-for="lang in availableLocales"
              :key="lang.code"
              class="navigation__item navigation__item--lang"
            >
              <NuxtLink :to="switchLocalePath(lang.code)" class="navigation__link">
                {{ toNormalizedUpperCase(lang.code) }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <LazyCartModal />
  </BaseContainer>
</template>

<style scoped lang="scss">
.header {
  padding-top: clamped($min-size: $spacing--2xl, $max-size: $spacing--4xl);

  &__head {
    display: flex;
    justify-content: center;
  }

  &__main {
    position: relative;
    margin-top: $spacing--lg;
  }

  &__buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__menu-button {
    padding: $spacing--sm;
    border: 1px solid $divider-color--regular;
    border-radius: $rounded--lg;
    color: $primary-color--dark;
    background-color: $secondary-color--extra-light;

    &--active {
      background-color: $primary-color--dark;
      color: $color-white--soft;
    }
  }

  &__navigation {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    margin-top: $spacing--sm;
    padding: $spacing--2xl;
    z-index: stacking(header);

    &--open {
      display: block;
    }
  }
}

.navigation {
  $parent: &;
  background-color: $secondary-color--extra-light;
  border: 1px solid $divider-color--regular;
  border-radius: $rounded--3xl;

  &__menu,
  &__submenu {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  &__submenu {
    display: none;
    max-height: 0;
    padding: $spacing--sm 0 $spacing--sm $spacing--lg;

    &--open {
      display: block;
      max-height: 100rem;
    }
  }

  &__item {
    position: relative;
    font-weight: $font--semibold;
    font-size: $text--lg;

    &--lang {
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: $divider-color--regular;

        @include breakpoint('lg') {
          top: 50%;
          transform: translate3d(0, -50%, 0);
          width: 1px;
          height: 50%;
        }
      }
    }
  }

  &__link,
  &__submenu-button,
  &__cart-button {
    padding: $spacing--lg;
  }

  &__link {
    display: block;
  }

  &__submenu-button,
  &__cart-button {
    text-align: start;
    font-weight: $font--semibold;
    line-height: $leading--cozy;
    color: $primary-color--dark;
    background-color: transparent;

    @media (hover: hover) {
      &:hover {
        color: $primary-color--light;
      }
    }
  }

  &__cart-button-count {
    font-weight: $font--bold;
    color: $primary-color--light;
  }
}

@include breakpoint('md') {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__main {
      margin-top: 0;
    }

    &__cart-button,
    &__cta-button {
      margin-right: $spacing--lg;
    }
  }
}

@include breakpoint('lg') {
  .header {
    &__main {
      display: flex;
    }

    &__navigation {
      display: block;
      width: auto;
      padding: $spacing--xs $spacing--2xl;
      margin-right: $spacing--md;
    }

    &__buttons {
      justify-content: flex-end;
      order: 2;
    }

    &__cta-button {
      margin-right: 0;
    }
  }

  .navigation {
    $parent: &;
    position: static;
    order: 1;
    margin-top: 0;
    border: none;
    border-radius: calc($rounded--3xl * 2);

    &__menu {
      display: flex;
      justify-content: space-between;
    }

    &__submenu {
      position: absolute;
      left: -$spacing--lg;
      padding: $spacing--lg;
      background-color: $secondary-color--extra-light;
      border-radius: $rounded--lg;
    }
  }
}

@include breakpoint('xl') {
  .header {
    &__navigation {
      margin-right: $spacing--4xl;
    }
  }
}
</style>
