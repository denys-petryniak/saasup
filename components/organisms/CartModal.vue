<script setup lang="ts">
const { visible, close } = inject(modalInjectionKey) as ModalOptions

const { cartItems, totalCartItems, totalCartPrice, removeFromCart } = useCart()

const localePath = useLocalePath()
</script>

<template>
  <BaseModal
    :visible="visible"
    class="order-modal plan-duration-widget__order-modal"
    @close="close"
  >
    <template #header>
      <p class="order-modal__title">
        {{ $t('cart.name') }}
      </p>
    </template>
    <template #default>
      <template v-if="totalCartItems > 0">
        <div v-for="cartItem in cartItems" :key="cartItem.id" class="cart-item order-modal__cart-item">
          <div>
            <p class="cart-item__name">
              {{ cartItem.plan.title }}
            </p>
            <p class="cart-item__price">
              ${{ cartItem.price }} USD
            </p>
            <p class="cart-item__duration">
              {{ $t('cart.duration') }}: <span class="cart-item__duration-value">{{ capitalizeFirstChar(cartItem.duration.name) }}</span>
            </p>
          </div>
          <BaseButton
            size="md"
            class="cart-item__remove-button"
            @click="removeFromCart(cartItem.id)"
          >
            {{ $t('button.remove') }}
          </BaseButton>
        </div>
      </template>
      <template v-else>
        <div class="order-modal__empty-cart">
          <p class="order-modal__empty-cart-text">
            {{ $t('cart.empty') }}
          </p>
          <BaseButton
            :to="localePath('/pricing')"
            color="dark-branded"
            @click="close"
          >
            {{ $t('button.pricing') }}
          </BaseButton>
        </div>
      </template>
    </template>
    <template #footer>
      <p class="order-modal__total-price">
        <span class="order-modal__total-price-label">{{ $t('cart.total') }}:</span><span class="order-modal__total-price-value">${{ totalCartPrice }} USD</span>
      </p>
      <BaseButton
        class="order-modal__button"
        @click="$toast.warn($t('message.checkout_disabled'))"
      >
        {{ $t('button.checkout') }}
      </BaseButton>
    </template>
  </BaseModal>
</template>

<style scoped lang="scss">
.order-modal {
  &__title {
    margin: 0;
    padding-right: clamped($min-size: $spacing--3xl, $max-size: $spacing--5xl);
    @include fluid-typography(
      $min-font-size: $text--3xl,
      $max-font-size: $text--4xl,
      $min-line-height: $leading--tight,
      $max-line-height: $leading--condensed
    );
    font-weight: $font--extrabold;
    color: $primary-color--dark;
  }

  &__total-price {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    @include fluid-typography(
      $min-font-size: $text--2xl,
      $max-font-size: $text--3xl,
      $min-line-height: $leading--tight,
      $max-line-height: $leading--condensed
    );
    color: $primary-color--dark;
  }

  &__total-price-value {
    font-weight: $font--extrabold;
  }

  &__button {
    width: 100%;
  }

  &__empty-cart {
    text-align: center;
  }
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:first-child) {
    margin-top: clamped($min-size: $spacing--2xl, $max-size: $spacing--4xl);
    padding-top: clamped($min-size: $spacing--2xl, $max-size: $spacing--4xl);
    border-top: 1px solid $divider-color--regular;
  }

  &__name {
    margin-bottom: 0;
    @include fluid-typography(
      $min-font-size: $text--lg,
      $max-font-size: $text--xl,
      $min-line-height: $leading--tight,
      $max-line-height: $leading--condensed
    );
    font-weight: $font--bold;
    color: $primary-color--dark;
  }

  &__price {
    margin: $spacing--md 0 0 0;
    @include fluid-typography(
      $min-font-size: $text--2xl,
      $max-font-size: $text--3xl,
      $min-line-height: $leading--tight,
      $max-line-height: $leading--condensed
    );
    font-weight: $font--extrabold;
    color: $primary-color--dark;
  }

  &__duration {
    margin: $spacing--md 0 0 0;
    @include fluid-typography(
      $min-font-size: $text--lg,
      $max-font-size: $text--xl,
      $min-line-height: $leading--tight,
      $max-line-height: $leading--condensed
    );
    color: $primary-color--dark;
  }

  &__duration-value {
    font-weight: $font--extrabold;
  }
}
</style>
