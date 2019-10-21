/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"

export default () => {
  return (
    <div
      css={css`
        grid-row: 2/3;
        grid-column: 2/8;

        h1 {
          text-align: center;
        }
      `}
    >
      <h1>Welcome to Time Peace</h1>
    </div>
  )
}
