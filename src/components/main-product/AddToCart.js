import React, { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"
import StyledButton from "./StyledButton"
const AddToCart = ({ variantId }) => {
  const { addProductToCart } = useContext(StoreContext)
  return (
    <StyledButton
      icon="/shopping-bag.svg"
      onClick={() => addProductToCart(variantId)}
      title="ADD TO BAG"
    />
  )
}

export default AddToCart
