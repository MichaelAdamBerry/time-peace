import React, { useContext, useEffect, useState } from "react"

import { StoreContext } from "../../context/StoreContext"
import { animated } from "react-spring"
import SavedItem from "./SavedItem"
import { CartContainer } from "../styledComponents/CartContainer"

const Cart = ({ style }) => {
  const [lineItems, setLineItems] = useState([])
  const [coupon, setCoupon] = useState("")
  const {
    checkout,
    toggleCartOpen,
    removeProductFromCart,
    checkCoupon,
    removeCoupon,
  } = useContext(StoreContext)
  useEffect(() => {
    setLineItems(() => (checkout ? checkout.lineItems : []))
  })

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
        zIndex: 102,
        overflowY: "scroll",
        ...style,
      }}
    >
      <CartContainer>
        <button className="close-btn" onClick={toggleCartOpen}>
          <img alt="X shape to close shopping cart" src="/close-btn.svg" />
        </button>
        <h3>Current Shopping Cart</h3>
        {lineItems.map(item => (
          <SavedItem
            id={item.id}
            src={item.variant.image.src}
            title={item.title}
            quantity={item.quantity}
            price={item.variant.price}
            remove={removeProductFromCart}
          />
        ))}
        <div className="flex-between">
          <div className="total">
            <h4> Total: ${checkout.totalPrice}</h4>
          </div>
          <div className="buy-btn">
            <a href={checkout.webUrl}>Buy Now</a>
          </div>
        </div>
        {checkout.discountApplications.length > 0 ? (
          <p>
            Discount applied!
            <h4>
              {checkout.discountApplications[0].code} -{" "}
              {checkout.discountApplications[0].percent}% off
            </h4>
            <button
              className="remove"
              onClick={() =>
                removeCoupon(checkout.discountApplications[0].code)
              }
            >
              Remove
            </button>
          </p>
        ) : (
          <form
            className="discount"
            onSubmit={e => {
              e.preventDefault()
              checkCoupon(coupon)
            }}
          >
            <label htmlFor="coupon">Have a discount code?</label>
            <input
              id="coupon"
              value={coupon}
              onChange={e => setCoupon(e.target.value)}
              type="text"
            />

            <button type="submit">+</button>
          </form>
        )}
      </CartContainer>
    </animated.div>
  )
}

export default Cart
