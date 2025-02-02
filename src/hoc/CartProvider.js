import { useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [isOpen, setOpen] = useState(false)
  const [cartChangeTrigger, setCartChangeTrigger] = useState(false)
  const cartHasChanged = () => setCartChangeTrigger((prev) => !prev)
  const openCart = () => setOpen(true)
  const closeCart = () => setOpen(false)

  const value = {
    isOpen,
    setOpen,
    openCart,
    closeCart,
    cartChangeTrigger,
    setCartChangeTrigger,
    cartHasChanged
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
