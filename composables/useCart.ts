import { useStorage } from '@vueuse/core'

interface CartItem {
  name: string
  duration: string
  price: string
}

export function useCart() {
  const cartItems = useStorage<CartItem[]>('cart', [])

  function addToCart(item: CartItem) {
    const itemExists = cartItems.value.some(
      cartItem => cartItem.name === item.name && cartItem.duration === item.duration,
    )

    if (itemExists) {
      // TODO: replace alert with toast notification
      // eslint-disable-next-line no-alert
      alert('This item is already in your cart.')
    }
    else {
      cartItems.value = [...cartItems.value, item]
      // TODO: replace alert with toast notification
      // eslint-disable-next-line no-alert
      alert('Item added to your cart successfully!')
    }
  }

  const totalCartItems = computed(() => cartItems.value.length)

  return {
    cartItems,
    totalCartItems,
    addToCart,
  }
}
