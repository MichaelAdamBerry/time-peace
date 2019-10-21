import React, { useContext } from "react"
import { animated, useTransition } from "react-spring"

import { StoreContext } from "../context/StoreContext"

const Loader = () => {
  const { isLoading } = useContext(StoreContext)
  const transition = useTransition(isLoading, null, {
    config: { duration: 2000 },
    from: { visibility: `hidden` },
    enter: { visibility: `visible` },
    leave: { visibility: `hidden` },
  })

  return transition.map(
    ({ item, key, props }) =>
      item && (
        <div
          key={key}
          style={{
            position: "fixed",

            top: "25%",

            width: "100%",
            minHeight: 300,
            maxHeight: "300px",
            borderRadius: "50%",
            color: "white",
            zIndex: 250,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <animated.p
            style={{
              textAlign: "center",
              ...props,
            }}
          >
            <img
              src="/loader.svg"
              alt="spinning clock animation while page info loads"
            />
          </animated.p>
        </div>
      )
  )
}

export default Loader
