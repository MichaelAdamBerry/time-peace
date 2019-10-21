import React, { useContext, useEffect, useState } from "react"
import { Link } from "gatsby"
import { StoreContext } from "../../context/StoreContext"
import { animated } from "react-spring"
import { WishlistContainer } from "../styledComponents/WishlistContainer"
import SavedItem from "./SavedItem"

const Wishlist = ({ style }) => {
  const {
    toggleWishListOpen,
    wishList,
    isWishListOpen,
    removeProductFromWishList,
  } = useContext(StoreContext)

  const [wishListItems, updateWishListItems] = useState([])

  useEffect(() => {
    updateWishListItems(isWishListOpen ? wishListItems.concat(wishList) : [])
  }, [])

  console.log("wishlist", wishListItems)
  return (
    <animated.div
      style={{
        boxShadow: "0px 0px 55px #2f2f2f",
        position: "fixed",
        top: 0,
        right: 0,
        width: "50%",
        height: "100%",
        background: "white",
        padding: "60px 40px",
        zIndex: 202,

        ...style,
      }}
    >
      <WishlistContainer>
        <button className="close-btn" onClick={toggleWishListOpen}>
          <img alt="X shape to close shopping cart" src="/close-btn.svg" />
        </button>
        <h3>Wishlist</h3>
        {wishListItems.length > 0 ? (
          wishList.map((item, indx) => (
            <Link key={item.variants[0].id} to={`/products/${item.handle}`}>
              <SavedItem
                key={item.variants[0].id}
                id={item.variants[0].id}
                src={item.images[0].localFile.url}
                title={item.title}
                price={item.variants[0].price}
                remove={removeProductFromWishList}
              />
            </Link>
          ))
        ) : (
          <div>
            <h3> No Items added to your wishlist yet</h3>
          </div>
        )}
      </WishlistContainer>
    </animated.div>
  )
}

export default Wishlist
