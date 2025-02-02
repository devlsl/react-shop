import { useCart } from '../../hooks/useCart'
import { addToCart } from '../../serverMethods/addToCart'
import { BorderButton } from './BorderButton'
import { AiOutlinePlus } from 'react-icons/ai'

export function AddToCartButton({ userId, itemId, itemQty }) {
  const { cartHasChanged } = useCart()

  const onClick = async () => {
    await addToCart(userId, itemId, itemQty)
    cartHasChanged()
  }

  return (
    <BorderButton onClick={onClick}>
      <AiOutlinePlus />
    </BorderButton>
  )
}
