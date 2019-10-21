import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Welcome from "../components/landing/Welcome"

const IndexPage = () => {
  const { allShopifyProduct } = useStaticQuery(graphql`
    query allCurrentProducts {
      allShopifyProduct {
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
  `)
  const [product, setProduct] = useState()

  useEffect(async () => {
    const startingProduct = await allShopifyProduct.edges[0]
    setProduct(() => startingProduct.node)
  }, [])
  return (
    <Layout>
      <Welcome />
    </Layout>
  )
}

export default IndexPage
