/** @jsx jsx */

import React, { useRef, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { useSpring, animated } from "react-spring"
import { Link } from "gatsby"
import { css, jsx } from "@emotion/core"
import { formatPrice, formatName } from "../../helpers/helpers"

const Mens = ({ isOpen, remove, node }) => {
  const { allShopifyProduct } = useStaticQuery(graphql`
    query popularMensProducts {
      allShopifyProduct {
        edges {
          node {
            tags
            handle
            title
            priceRange {
              maxVariantPrice {
                amount
              }
            }
            images {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const sorted = allShopifyProduct.edges
    .filter(edge => edge.node.tags.includes("mens"))
    .sort(
      (edgeA, edgeB) =>
        edgeB.node.priceRange.maxVariantPrice.amount -
        edgeA.node.priceRange.maxVariantPrice.amount
    )
    .slice(0, 3)

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
              justify-content: space-between;
              grid-row: 2/3;
              grid-column: 4/8;
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
          <h3>Show by type</h3>
          <nav>
            <Link
              className="nav-item"
              to="product-list/chrono"
              state={{ tag: "chrono", gender: "mens" }}
            >
              Chronograph Watches
            </Link>
            <Link
              className="nav-item"
              to="product-list/vintage"
              state={{ tag: "vintage", gender: "mens" }}
            >
              Vintage Watches
            </Link>
            <Link
              className="nav-item"
              to="product-list/sleek"
              state={{ tag: "sleek", gender: "mens" }}
            >
              Sleek Watches
            </Link>
          </nav>

          <div className="flex-container">
            {sorted.map(edge => {
              return (
                <div
                  key={Math.random() * 10}
                  style={{ width: "180px", marginRight: "1rem" }}
                >
                  {" "}
                  <Link to={`products/${edge.node.handle}`}>
                    <Image
                      className="img"
                      fluid={
                        edge.node.images[1].localFile.childImageSharp.fluid
                      }
                      alt="popular mens watch"
                    />{" "}
                  </Link>
                  <h4>{formatName(edge.node.title)}</h4>
                  <p>
                    {formatPrice(edge.node.priceRange.maxVariantPrice.amount)}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </animated.div>
  )
}

export default Mens
