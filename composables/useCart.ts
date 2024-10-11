import { useStorage } from '@vueuse/core'
import type { CartItem } from '~/types'

export function useCart() {
  const cartItems = useStorage<CartItem[]>('cart', [])

  function addToCart(item: CartItem) {
    const itemExists = cartItems.value.some(
      cartItem => cartItem.plan.id === item.plan.id && cartItem.duration.value === item.duration.value,
    )

    if (!itemExists) {
      cartItems.value = [...cartItems.value, item]
    }

    return { itemExists }
  }

  function removeFromCart(id: string) {
    cartItems.value = cartItems.value.filter(
      cartItem => cartItem.id !== id,
    )
  }

  const totalCartItems = computed(() => cartItems.value.length)

  const totalCartPrice = computed(() => {
    const total = cartItems.value.reduce((acc, item) => {
      return acc + Number.parseFloat(item.price)
    }, 0)

    return total.toFixed(2)
  })

  return {
    cartItems,
    totalCartItems,
    totalCartPrice,
    addToCart,
    removeFromCart,
  }
}
