import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroProduct from "../components/main-product/HeroProduct"
import SuggestionBar from "../components/main-product/SuggestionBar"
import { graphql } from "gatsby"
const ProductPageTemplate = ({ data }) => {
  return (
    <Layout>
      <SEO title="Time Peace" />
      <HeroProduct currentProduct={data.shopifyProduct} />
      <SuggestionBar currentProduct={data.shopifyProduct} />
    </Layout>
  )
}

export const query = graphql`
  query ProductQuery($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      tags
      title
      description
      priceRange {
        maxVariantPrice {
          amount
        }
      }
      handle
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
      variants {
        shopifyId
        sku
        id
        title
        price
      }
    }
  }
`

export default ProductPageTemplate
