import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import FeaturedContent from "./FeaturedContent"
import Thumbs from "./Thumbs"
import { HeroContainer } from "../styledComponents/HeroContainer"

const HeroProduct = ({ currentProduct }) => {
  const { allShopifyProduct } = useStaticQuery(graphql`
    query allProducts {
      allShopifyProduct {
        edges {
          node {
            description
            title
            tags
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
            variants {
              sku
              shopifyId
              id
              title
              price
            }
          }
        }
      }
    }
  `)

  const defaultProd = allShopifyProduct.edges[1].node
  const [product, setProduct] = useState(defaultProd)
  const [imgIndex, updateImageIndex] = useState(1)
  const [imgSrc, setImgSrc] = useState(
    defaultProd.images[1].localFile.childImageSharp.fluid
  )

  useEffect(() => {
    setProduct(() => currentProduct && currentProduct)
    setImgSrc(
      () =>
        currentProduct &&
        currentProduct.images[1].localFile.childImageSharp.fluid
    )
  }, [])

  const selectThumb = position => {
    if (!position) {
      console.error("Invalid position argument in SelectThumb function")
    }
    updateImageIndex(position)
    setImgSrc(currentProduct.images[position].localFile.childImageSharp.fluid)
  }

  const updateThumb = direction => {
    const max = product.images.slice(1).length
    if (direction === "left") {
      let nextIndx = imgIndex - 1 < 1 ? max : imgIndex - 1
      updateImageIndex(nextIndx)
      setImgSrc(currentProduct.images[nextIndx].localFile.childImageSharp.fluid)
    } else if (direction === "right") {
      let nextIndx = imgIndex + 1 > max ? 1 : imgIndex + 1
      updateImageIndex(nextIndx)
      setImgSrc(currentProduct.images[nextIndx].localFile.childImageSharp.fluid)
    } else {
      console.error(
        "Invalid direction passed to updateThumb function. Must have perameter left or right"
      )
    }
  }

  return (
    <HeroContainer>
      <div className="image">
        <Img fluid={imgSrc} />
      </div>
      <Thumbs
        images={product.images.slice(1)}
        handleBtnClick={updateThumb}
        handleThumbClick={selectThumb}
      />
      <FeaturedContent product={product} />
    </HeroContainer>
  )
}

export default HeroProduct
