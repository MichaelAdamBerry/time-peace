import React, { useEffect, useState } from "react"
import Client from "shopify-buy"
import { get } from "https"

export const client = Client.buildClient({
  domain: `plant-and-pot-shop.myshopify.com`,
  storefrontAccessToken: `8bf91abc7293b7b852db4dab714831ed`,
})

const defaultValues = {
  client,
  cart: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  addProductToWishlist: () => {},
  removeProductFromWishList: () => {},
  checkout: {
    lineItems: [],
  },
}

export const StoreContext = React.createContext(defaultValues)

export const StoreProvider = ({ children }) => {
  const [checkout, setCheckout] = useState(defaultValues.checkout)
  const [isCartOpen, setCartOpen] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [wishList, setWishlist] = useState([])
  const [isWishListOpen, setWishListOpen] = useState(false)

  const toggleWishListOpen = () => {
    setWishListOpen(!isWishListOpen)
  }

  const toggleCartOpen = () => {
    setCartOpen(!isCartOpen)
  }

  useEffect(() => {
    initializeCheckout()
  }, [])

  const isBrowser = typeof Window !== undefined

  const getNewId = async () => {
    try {
      const newCheckout = await client.checkout.create()
      if (isBrowser) {
        localStorage.setItem("checkout_id", newCheckout.id)
      }
      return newCheckout
    } catch (e) {
      console.error(e)
    }
  }

  const initializeCheckout = async () => {
    try {
      const currentCheckoutId = isBrowser
        ? localStorage.getItem("checkout_id")
        : null

      let newCheckout = null

      if (currentCheckoutId) {
        newCheckout = await client.checkout.fetch(currentCheckoutId)
        if (newCheckout.completedAt) {
          newCheckout = await getNewId()
        }
      } else {
        newCheckout = await getNewId()
      }

      setCheckout(newCheckout)
    } catch (e) {
      console.error(e)
    }
  }

  const addProductToWishlist = currentProduct => {
    try {
      setLoading(true)
      let product = isBrowser ? currentProduct : null
      if (product) {
        let exists = wishList.find(d => d.handle === product.handle)
        if (exists === undefined) {
          setWishlist(() => wishList.concat([product]))
        }
      }
      localStorage.setItem("wishlist", JSON.stringify(wishList))
      setLoading(false)
    } catch (e) {
      console.error(e)
    }
  }

  const removeProductFromWishList = id => {
    try {
      setLoading(true)
      let exists = wishList.findIndex(d => d.variants[0].id === id)
      setWishlist(() => {
        if (exists !== -1) {
          //if first index
          if (exists === 0) {
            return wishList.slice(1)
            //if last index
          } else if (exists + 1 === wishList.length) {
            return wishList.slice(0, exists)
          } else {
            //if in middle of array
            return wishList
              .slice(0, exists)
              .concat(wishList.slice(exists + 1, wishList.length - 1))
          }
        }
      })

      localStorage.setItem("wishlist", JSON.stringify(wishList))

      setLoading(false)
    } catch (e) {
      console.error(e)
    }
  }

  const getWishListLength = async () => {
    const list = await JSON.parse(localStorage.getItem("wishlist"))
    return list.length
  }

  const addProductToCart = async variantId => {
    try {
      setLoading(true)
      const lineItems = [
        {
          variantId,
          quantity: 1,
        },
      ]
      const newCheckout = await client.checkout.addLineItems(
        checkout.id,
        lineItems
      )

      setCheckout(newCheckout)
      setLoading(false)
    } catch (e) {
      console.error(e)
    }
  }

  const removeProductFromCart = async variantId => {
    try {
      setLoading(true)
      const lineItems = [
        {
          variantId,
          quantity: 1,
        },
      ]
      const newCheckout = await client.checkout.removeLineItems(checkout.id, [
        variantId,
      ])
      setCheckout(newCheckout)
      setLoading(false)
    } catch (e) {
      console.error(e)
    }
  }

  const removeCoupon = async coupon => {
    setLoading(true)
    const newCheckout = await client.checkout.removeDiscount(
      checkout.id,
      coupon
    )

    setCheckout(newCheckout)
    setLoading(false)
  }

  const checkCoupon = async coupon => {
    setLoading(true)
    const newCheckout = await client.checkout.addDiscount(checkout.id, coupon)

    setCheckout(newCheckout)
    setLoading(false)
  }

  return (
    <StoreContext.Provider
      value={{
        ...defaultValues,
        toggleCartOpen,
        addProductToCart,
        removeProductFromCart,
        checkout,
        isCartOpen,
        isWishListOpen,
        toggleWishListOpen,
        checkCoupon,
        removeCoupon,
        isLoading,
        setLoading,
        wishList,
        removeProductFromWishList,
        getWishListLength,
        addProductToWishlist,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}
