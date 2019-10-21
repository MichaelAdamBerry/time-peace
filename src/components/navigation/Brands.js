/** @jsx jsx */

import React, { useEffect } from "react"
import { Link } from "gatsby"
import { useSpring, animated } from "react-spring"
import { jsx, css } from "@emotion/core"

const Brands = ({ isOpen, remove, node }) => {
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
          data-testid="brands"
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
              grid-row: 2/3;
              grid-column: 2/8;
            }

            nav {
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
              color: black;
              text-decoration: none;
            }
          `}
        >
          <h3>Featured Brand</h3>
          <nav>
            <Link
              className="nav-item"
              to="/product-list/omega"
              state={{ tag: "omega", gender: "none" }}
            >
              Omega
            </Link>
            <Link
              className="nav-item"
              to="/product-list/rolex"
              state={{ tag: "rolex", gender: "none" }}
            >
              Rolex
            </Link>
            <Link
              className="nav-item"
              to="/product-list/oris"
              state={{ tag: "oris", gender: "none" }}
            >
              Oris
            </Link>
            <Link
              className="nav-item"
              to="/product-list/tudor"
              state={{ tag: "tudor", gender: "none" }}
            >
              Tudor
            </Link>
          </nav>

          <div className="flex-container">
            <div style={{ width: "180px", marginRight: "1rem" }}>
              <Link
                className="nav-item"
                to="/product-list/omega"
                state={{ tag: "omega", gender: "none" }}
              >
                <img src="/brand-omega.jpg" />
              </Link>
            </div>
            <div
              css={css`
                max-width: 200px;
                margin-left: 1rem;

                h4,
                p {
                  font-size: 0.8rem;
                }

                h4 {
                  font-weight: bold;
                  text-transform: uppercase;
                }

                a.button {
                  background-color: white;
                  margin: 0;
                  padding: o;
                  font-size: 0.7rem;
                  width: 100%;
                  border: 3px solid #2f2f2f;
                }
              `}
            >
              <h4>
                Omega :<br /> Exact Time for Life
              </h4>
              <p>Swiss luxury watchmaker in 1848</p>
              <Link to="/product-list/omega" className="button">
                More Omega Watches
              </Link>
            </div>
          </div>
        </div>
      )}
    </animated.div>
  )
}

export default Brands
