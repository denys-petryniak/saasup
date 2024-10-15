<script setup lang="ts">
import type { CartItem } from '~/types'

interface Props {
  title: string
  price: string
}

const props = defineProps<Props>()

const { t } = useI18n({
  useScope: 'local',
})

const selectedPlanDuration = ref('')

const planOptions = ref([
  { text: t('duration.monthly'), value: 'monthly' },
  { text: t('duration.annually'), value: 'annually' },
])

const DISCOUNT_RATE = 0.1 // 10% discount for annual plans

// TODO: move to composables
const priceByDuration = computed(() => {
  const basePrice = Number(props.price)

  if (Number.isNaN(basePrice)) {
    return '0.00'
  }

  if (selectedPlanDuration.value === 'monthly') {
    return basePrice.toFixed(2)
  }

  if (selectedPlanDuration.value === 'annually') {
    const annualPrice = basePrice * 12
    const discountedPrice = annualPrice - (annualPrice * DISCOUNT_RATE)

    return discountedPrice.toFixed(2)
  }

  return basePrice.toFixed(2)
})

const isCartModalVisible = ref(false)

function closeModal() {
  isCartModalVisible.value = false
}

provide(modalInjectionKey, {
  visible: isCartModalVisible,
  close: closeModal,
})

const { addToCart } = useCart()

const { $toast } = useNuxtApp()

const durationName = computed(() => {
  return planOptions.value.find(option => option.value === selectedPlanDuration.value)!.text
})

const route = useRoute()
const planName = computed(() => route.params.slug?.[1])

function handleAddToCart() {
  if (!selectedPlanDuration.value) {
    $toast.warning(t('toast.warning.select_plan_duration'))
    return
  }

  const randomId = crypto.randomUUID()

  const cartItem: CartItem = {
    id: randomId,
    plan: {
      id: planName.value,
      title: props.title,
    },
    duration: {
      name: durationName.value,
      value: selectedPlanDuration.value,
    },
    price: priceByDuration.value,
  }

  const { itemExists } = addToCart(cartItem)

  if (itemExists) {
    $toast.warning(t('toast.warning.cart_item_exists'))
    isCartModalVisible.value = true

    return
  }

  $toast.success(t('toast.success.added_to_cart'))
  isCartModalVisible.value = true
}
</script>

<template>
  <div class="plan-duration-widget">
    <p class="plan-duration-widget__title">
      {{ t('title') }}
    </p>
    <p class="plan-duration-widget__description">
      {{ t('description') }}
    </p>
    <p class="plan-duration-widget__price">
      ${{ priceByDuration }} USD
    </p>
    <p class="plan-duration-widget__discount">
      *10% {{ t('discount') }}
    </p>
    <select
      id="plan-duration-widget-select"
      v-model="selectedPlanDuration"
      name="plan-duration-widget"
      class="plan-duration-widget__select"
    >
      <option disabled value="">
        {{ t('duration.select') }}
      </option>
      <option
        v-for="planOption in planOptions"
        :key="planOption.value"
        :value="planOption.value"
      >
        {{ planOption.text }}
      </option>
    </select>
    <BaseButton
      class="plan-duration-widget__button"
      @click="handleAddToCart"
    >
      {{ $t('button.add_to_cart') }}
    </BaseButton>
    <LazyCartModal />
  </div>
</template>

<style scoped lang="scss">
.plan-duration-widget {
  padding: clamped($min-size: $spacing--4xl, $max-size: $spacing--8xl);
  border-radius: calc($rounded--3xl * 2);
  background-color: $secondary-color--extra-light;

  &__title {
    @include fluid-typography(
      $min-font-size: $text--3xl,
      $max-font-size: $text--4xl,
      $min-line-height: $leading--tight,
      $max-line-height: $leading--condensed
    );
    font-weight: $font--extrabold;
    color: $primary-color--dark;
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
    color: $primary-color--dark;
  }

  &__discount {
    margin-top: $spacing--sm;
    font-size: $text--lg;
  }

  &__select {
    width: 100%;
    padding: clamped($min-size: $spacing--lg, $max-size: $spacing--2xl)
      clamped($min-size: $spacing--2xl, $max-size: $spacing--4xl);
    border: 1px solid $divider-color--regular;
    border-radius: calc($rounded--3xl * 2);
    font-size: $text--lg;
    font-weight: $font--semibold;
    color: $primary-color--dark;
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

<i18n lang="yaml">
  en:
    title: Choose Your Plan Duration
    description: Select the plan based on your business requirements you can update it later once you going to next level.
    discount: discount for annual plans
    duration:
      select: Select Duration
      monthly: Monthly
      annually: Annually
    toast:
      warning:
        select_plan_duration: Please select a plan duration
        cart_item_exists: This item is already in your cart
      success:
        added_to_cart: Item added to your cart successfully!
  uk:
    title: Оберіть тривалість вашого плану
    description: Оберіть план, виходячи з потреб вашого бізнесу, і ви зможете оновити його пізніше, коли перейдете на наступний рівень.
    discount: знижка для річних тарифів
    duration:
      select: Оберіть тривалість
      monthly: Місячна
      annually: Річна
    toast:
      warning:
        select_plan_duration: Будь ласка, оберіть тривалість плану
        cart_item_exists: Цей елемент вже у кошику
      success:
        added_to_cart: Успішно додано до кошика!
</i18n>
