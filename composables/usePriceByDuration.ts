const DISCOUNT_RATE = 0.1 // 10% discount for annual plans

export function usePriceByDuration(basePriceString: string, selectedPlanDuration: Ref<string>) {
  const basePrice = Number(basePriceString)

  const priceByDuration = computed(() => {
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

  return {
    priceByDuration,
  }
}
