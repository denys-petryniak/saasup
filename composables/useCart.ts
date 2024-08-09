import { useStorage } from '@vueuse/core'

interface CartItem {
  id: string
  name: string
  duration: string
  price: string
}

const { $toast } = useNuxtApp()

export function useCart() {
  const cartItems = useStorage<CartItem[]>('cart', [])

  function addToCart(item: CartItem) {
    const itemExists = cartItems.value.some(
      cartItem => cartItem.name === item.name && cartItem.duration === item.duration,
    )

    if (itemExists) {
      $toast.warn('This item is already in your cart.')
    }
    else {
      cartItems.value = [...cartItems.value, item]
      $toast.success('Item added to your cart successfully!')
    }
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
