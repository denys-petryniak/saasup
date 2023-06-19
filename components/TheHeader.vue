<template>
  <header class="header">
    <NuxtLink class="header__logo-link" to="/">
      <img class="header__logo" src="@/assets/images/saasup-logo.svg" alt="SaaSup logo">
    </NuxtLink>
    <div class="header__main">
      <BaseButton type="button">
        Cart
      </BaseButton>
      <nav class="navigation">
        <menu>
          <NuxtLink to="/">
            <li>Home</li>
          </NuxtLink>
          <NuxtLink to="about">
            <li>About Us</li>
          </NuxtLink>
          <NuxtLink to="">
            <li>Pages</li>
          </NuxtLink>
          <NuxtLink to="contacts">
            <li>Contact Us</li>
          </NuxtLink>
        </menu>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  &__logo-link {
    display: block;
  }

  &__logo {
    margin-inline: auto;
  }

  &__main {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
