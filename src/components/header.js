import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import { useTransition } from "react-spring"
import Cart from "./modal-slide-ins/Cart"
import { StoreContext } from "../context/StoreContext"
import AutoCompleteSearch from "./auto-complete/AutoCompleteSearch"
import { StyledHeader } from "./styledComponents/StyledHeader"
import Loader from "./Loader"
import Wishlist from "./modal-slide-ins/Wishlist"

const Header = ({ siteTitle }) => {
  const {
    isCartOpen,
    checkout,
    toggleCartOpen,
    isWishListOpen,
    toggleWishListOpen,
    isLoading,
    getWishListLength,
  } = useContext(StoreContext)

  const qty = checkout.lineItems.reduce((acc, cur) => {
    return (acc = cur.quantity + acc)
  }, 0)

  const wishListLength = getWishListLength()

  const transitions = useTransition(isCartOpen, null, {
    from: { transform: `translate3d(100%, 0, 0)` },
    enter: { transform: `translate3d(0, 0, 0)` },
    leave: { transform: `translate3d(1100%, 0, 0)` },
  })

  const wishlistTransitions = useTransition(isWishListOpen, null, {
    from: { transform: `translate3d(100%, 0, 0)` },
    enter: { transform: `translate3d(0, 0, 0)` },
    leave: { transform: `translate3d(1100%, 0, 0)` },
  })

  const renderIndicator = qty => {
    if (qty && qty > 0) {
      return <span className="indicator">{qty > 0 && qty}</span>
    }
  }
  return (
    <>
      {isLoading && <Loader isLoading={isLoading} />}
      <StyledHeader>
        <h1>
          <Link className="site-title" to="/">
            {siteTitle}
          </Link>
        </h1>
        <AutoCompleteSearch />
        <div className="icons">
          <img src="/user.svg" alt="user icon" />
          <button className="shopping-bag" onClick={toggleWishListOpen}>
            <img src="/wishlist-star.svg" alt="favorites icon" />
            {renderIndicator(wishListLength)}
          </button>
          <button className="shopping-bag" onClick={toggleCartOpen}>
            <img src="/shopping-bag.svg" alt="shopping cart icon" />
            {renderIndicator(qty)}
          </button>
        </div>
      </StyledHeader>
      {transitions.map(
        ({ item, key, props }) => item && <Cart key={key} style={props} />
      )}
      {wishlistTransitions.map(
        ({ item, key, props }) => item && <Wishlist key={key} style={props} />
      )}
    </>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
