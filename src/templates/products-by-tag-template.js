/** @jsx jsx */
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import { css, jsx } from "@emotion/core"

const ProductsByTagTemplate = ({ data, location }) => {
  console.log(location.state.tag)
  console.log("data from productsByTagTemplate", data)

  const { allShopifyProduct } = data

  return (
    <Layout>
      <SEO />
      <h1
        css={css`
          grid-row: 2/3;
          grid-column: 1/9;
          justify-self: center;
          text-transform: capitalize;
          font-size: 2rem;
        `}
      >
        All {location.state.tag} Products
      </h1>
      <div
        css={css`
          grid-row: 2/3;
          grid-column: 2/8;
          display: flex;
          flex-wrap: wrap;
          max-width: 700px;
          width: 700px;
          justify-self: center;
          justify-content: space-evenly;

          .product {
            width: 240px;
            margin-top: 5rem;
          }

          a {
            color: #2f2f2f;
            text-decoration: none;
          }

          h3 {
            text-align: center;
            text-transform: lowercase;
          }

          h3:first-letter {
            text-transform: uppercase;
          }
        `}
      >
        {allShopifyProduct.edges.map(edge => {
          return (
            <div className="product">
              <Image
                style={{ boxShadow: "0px 0px 35px #2f2f2f35" }}
                fluid={edge.node.images[1].localFile.childImageSharp.fluid}
                alt={`Product thumbnail for ${edge.node.title}`}
              />
              <Link to={`/products/${edge.node.handle}`}>
                <h3>{edge.node.title}</h3>
              </Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ListingSearch($handle: String!) {
    allShopifyProduct(filter: { tags: { in: [$handle] } }) {
      edges {
        node {
          id
          tags
          description
          title
          descriptionHtml
          productType
          handle
          priceRange {
            maxVariantPrice {
              amount
            }
          }
          images {
            localFile {
              url
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default ProductsByTagTemplate
