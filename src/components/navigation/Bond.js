/** @jsx jsx */

import React, { useEffect, useState } from "react"
import { css, jsx } from "@emotion/core"
import { useSpring, animated } from "react-spring"

const Bond = ({ isOpen, remove, node }) => {
  const handleClick = e => {
    if (!node.current || node.current.contains(e.target)) {
      return
    }
    remove()
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClick)

    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  }, [])

  const { x } = useSpring({ x: isOpen ? 0 : 100 })

  return (
    <animated.div
      style={{
        position: "absolute",
        height: isOpen ? "368px" : "0px",

        transform: x.interpolate(x => `translate3d(0, ${x * -1}%, 0)`),
        right: "0px",
        left: "0px",
        zIndex: "100",
        opacity: `${isOpen ? ".99" : "0"}`,
        backgroundColor: "#f3f4f7",
        backgroundImage: "linear-gradient(315deg, #f3f4f7 0%, #caccd1 74%)",
        boxShadow: "0px 0px 50px #2f2f2f50",
      }}
    >
      {isOpen && (
        <div
          data-testid="bond"
          ref={node}
          css={css`
            display: grid;
            grid-template-columns: repeat(8, 1fr);
            grid-template-rows: 40px auto 40px;

            h3 {
              grid-row: 1/2;
              grid-column: 4/8;
              font-size: 0.8rem;
              text-transform: uppercase;
              font-weight: bold;
            }

            .flex-container {
              display: flex;
              justify-content: center;
              grid-row: 124;
              align-content: center;

              grid-column: 2/8;
            }

            nav {
              font-size: 0.8rem;
              grid-column: 2/4;
              grid-row: 2/3;
              display: flex;
              flex-direction: column;
            }

            nav-item {
              font-size: 0.8rem;
              margin-top: 1rem;
            }

            a {
              color: #2f2f2f;
              text-decoration: none;
            }
          `}
        >
          <h3>Bond @ 25 Collection</h3>
          <div className="flex-container">
            <div>
              <img style={{ width: "300px" }} src="/james-bond-watches.jpg" />
            </div>
            <div style={{ maxWidth: "200px", marginLeft: "1rem" }}>
              <h4>The Watches of James Bond</h4>
              <p>A collection of watches inspired by 007.</p>
            </div>
          </div>
        </div>
      )}
    </animated.div>
  )
}

export default Bond
