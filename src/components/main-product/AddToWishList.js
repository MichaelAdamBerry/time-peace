import React, { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"
import StyledButton from "./StyledButton"
const AddToWishList = ({ product }) => {
  const { addProductToWishlist } = useContext(StoreContext)

  return (
    <StyledButton
      icon="/wishlist-star.svg"
      onClick={() => addProductToWishlist(product)}
      title="ADD TO WISHLIST"
      theme="light"
    />
  )
}

export default AddToWishList
