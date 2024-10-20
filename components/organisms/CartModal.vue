<script setup lang="ts">
const { visible, close } = inject(modalInjectionKey) as ModalOptions

const { cartItems, totalCartItems, totalCartPrice, removeFromCart } = useCart()

const localePath = useLocalePath()

const orderModalBody = useTemplateRef<HTMLElement>('orderModalBody')

useBodyScrollLock(orderModalBody, visible)
</script>

<template>
  <BaseModal
    :visible="visible"
    class="order-modal"
    @close="close"
  >
    <div class="order-modal__container">
      <div class="order-modal__header">
        <p class="order-modal__title">
          {{ $t('cart.name') }}
        </p>
        <button
          class="order-modal__close-button"
          @click="close"
        >
          <Icon
            name="material-symbols:cancel"
            class="order-modal__close-icon"
            size="1.75em"
          />
        </button>
      </div>
      <div ref="orderModalBody" class="order-modal__body">
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
              size="sm"
              color="light-branded"
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
      </div>
      <div class="order-modal__footer">
        <p class="order-modal__total-price">
          <span class="order-modal__total-price-label">{{ $t('cart.total') }}:</span><span class="order-modal__total-price-value">${{ totalCartPrice }} USD</span>
        </p>
        <BaseButton
          class="order-modal__checkout-button"
          @click="$toast.warn($t('message.checkout_disabled'))"
        >
          {{ $t('button.checkout') }}
        </BaseButton>
      </div>
    </div>
  </BaseModal>
</template>

<style scoped lang="scss">
$order-modal-content-gap: clamped(
  $min-size: $spacing--2xl,
  $max-size: $spacing--4xl,
);

.order-modal {
  &__container {
    position: relative;
    margin-inline: auto;
    border-radius: $rounded--3xl;
    background-color: $color-white;
  }

  &__header,
  &__body,
  &__footer {
    padding: $order-modal-content-gap;
  }

  &__header {
    border-bottom: 1px solid $divider-color--regular;
  }

  &__body {
    max-height: 50vh;
    overflow-y: auto;
  }

  &__footer {
    border-top: 1px solid $divider-color--regular;
  }

  &__close-button {
    position: absolute;
    top: $order-modal-content-gap;
    right: $order-modal-content-gap;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
  }

  &__close-icon {
    color: $primary-color--dark;
  }

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

  &__checkout-button {
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
  gap: clamped($min-size: $spacing--lg, $max-size: $spacing--10xl);

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
