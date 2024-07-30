<script setup lang="ts">
interface Props {
  heading: string
  price: string
}

const props = defineProps<Props>()

const selected = ref('')

const options = ref([
  { text: 'Monthly', value: 'monthly' },
  { text: 'Annually', value: 'annually' },
])

const DISCOUNT_RATE = 0.1 // 10% discount for annual plans

const priceByDuration = computed(() => {
  const basePrice = Number(props.price)

  if (selected.value === 'monthly') {
    return basePrice.toFixed(2)
  }

  if (selected.value === 'annually') {
    const annualPrice = basePrice * 12
    const discountedPrice = annualPrice - (annualPrice * DISCOUNT_RATE)

    return discountedPrice.toFixed(2)
  }

  return basePrice.toFixed(2)
})

const { addToCart } = useCart()

function handleAddToCart() {
  if (!selected.value) {
    // TODO: replace alert with toast notification
    // eslint-disable-next-line no-alert
    alert('Please select a plan duration.')
    return
  }

  const cartItem = {
    name: props.heading,
    duration: selected.value,
    price: priceByDuration.value,
  }

  addToCart(cartItem)
}
</script>

<template>
  <div class="plan-duration-widget">
    <p class="plan-duration-widget__title">
      Choose Your Plan Duration
    </p>
    <p class="plan-duration-widget__description">
      Select the plan based on your business requirements you can update it later once you going to next level.
    </p>
    <p class="plan-duration-widget__price">
      ${{ priceByDuration }} USD
    </p>
    <p class="plan-duration-widget__discount">
      *10% discount for annual plans
    </p>
    <select
      id="plan-duration-widget-select"
      v-model="selected"
      name="plan-duration-widget"
      class="plan-duration-widget__select"
    >
      <option disabled value="">
        Select Duration
      </option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
    <BaseButton
      class="plan-duration-widget__button"
      @click="handleAddToCart"
    >
      Add to Cart
    </BaseButton>
  </div>
</template>

<style scoped lang="scss">
.plan-duration-widget {
  padding: clamped($min-size: $spacing--4xl, $max-size: $spacing--8xl);
  border-radius: $rounded--3xl * 2;
  background-color: $color--secondary--extra-light;

  &__title {
    @include fluid-typography(
      $min-font-size: $text--3xl,
      $max-font-size: $text--4xl,
      $min-line-height: $leading--tight,
      $max-line-height: $leading--condensed
    );
    font-weight: $font--extrabold;
    color: $color-primary--dark;
  }

  &__price {
    margin-bottom: 0;
    @include fluid-typography(
      $min-font-size: $text--4xl,
      $max-font-size: $text--7xl,
      $min-line-height: $leading--none,
      $max-line-height: $leading--tight
    );
    font-weight: $font--extrabold;
    color: $color-primary--dark;
  }

  &__discount {
    margin-top: $spacing--sm;
    font-size: $text--lg;
  }

  &__select {
    width: 100%;
    padding: clamped($min-size: $spacing--lg, $max-size: $spacing--2xl)
      clamped($min-size: $spacing--2xl, $max-size: $spacing--4xl);
    border: 1px solid $color-border--regular;
    border-radius: $rounded--3xl * 2;
    font-size: $text--lg;
    font-weight: $font--semibold;
    color: $color-primary--dark;
    background-color: transparent;
    appearance: none;
    cursor: pointer;
  }

  &__button {
    width: 100%;
    margin-top: $spacing--6xl;
  }
}
</style>
