import React, { useState, useContext } from "react"
import AddToCart from "./AddToCart"
import AddToWishList from "./AddToWishList"
import styled from "styled-components"
import StyledButton from "./StyledButton"
import { formatPrice } from "../../helpers/helpers"

const Content = styled.div`
  grid-row: 1/3;
  grid-column: 2/3;
  max-width: 400px;

  h2,
  h3 {
    font-weight: 500;
    font-size: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .description {
    margin-top: 1rem;
    border-top: solid #cccccc;
    border-bottom: solid #cccccc;
    padding-top: 1rem;
  }

  p {
    margin-top: 1rem;
    line-height: 1.3rem;
    font-size: 0.8rem;
  }
  .btns {
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 425px) {
    grid-row: 2/3;
    margin-left: 2rem;
    margin-right: 1rem;

    .btns {
      justify-content: space-around;
    }
  }
`

const FeaturedContent = ({ product }) => {
  let price = product.priceRange.maxVariantPrice.amount

  const firstVariant = product.variants[0]

  return (
    <Content>
      <h2>{product.title}</h2>
      <h3>{formatPrice(price)}</h3>
      <div className="description">
        <h3>Description</h3>
        <p>{product.description}</p>
      </div>
      <div className="btns">
        <AddToCart variantId={firstVariant.shopifyId} />
        <AddToWishList product={product} />
      </div>
    </Content>
  )
}

export default FeaturedContent
