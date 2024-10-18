interface PricingPlan {
  id?: string
  title: string
}

interface PricingDuration {
  name: string
  value: string
}

export interface CartItem {
  id: string
  plan: PricingPlan
  duration: PricingDuration
  price: string
}
