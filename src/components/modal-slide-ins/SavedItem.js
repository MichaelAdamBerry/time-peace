/** @jsx jsx */

import React from "react"
import { css, jsx } from "@emotion/core"
import { formatName, formatPrice } from "../../helpers/helpers"

const SavedItem = ({ id, src, title, quantity, price, remove }) => {
  return (
    <div
      className="item-container"
      key={id}
      css={css`
        display: flex;
        min-height: 100px;
        margin-top: 2rem;
        justify-content: space-between;
        box-shadow: 0px 0px 20px #2f2f2f10;
        padding: 20px;

        button:focus {
          outline: none;
        }
        h4 {
          color: black;
          font-size: 1rem;
          font-weight: 500;
        }
        p {
          font-weight: 1rem;
          margin-top: 3px;
          margin-bottom: 3px;
        }
        .product-thumb {
          width: 60px;
          height: 40px;
          position: relative;
          margin-right: 1rem;
        }

        .product-thumb img {
          position: absolute;
          top: 0px;
          width: 30px;
          right: 0px;
        }

        .remove {
          margin-top: 1rem;
          height: 1rem;
          font-size: 0.8rem;
          padding-top: 0;
          color: red;
          border-radius: 6px;
          background-color: white;
          border: 1px solid red;
          line-height: 1rem;
          width: 4rem;
        }
      `}
    >
      <div className="product-thumb">
        <img alt="thumbnail image of product" src={src} />
      </div>
      <div>
        <h4>{formatName(title)}</h4>

        {quantity && <p>Qty: {quantity}</p>}
      </div>
      <div>
        <p>{formatPrice(price)}</p>

        <button className="remove" onClick={() => remove(id)}>
          Remove
        </button>
      </div>
    </div>
  )
}

export default SavedItem
