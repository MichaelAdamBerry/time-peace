import React from "react"
import { render, fireEvent } from "@testing-library/react"

import { PureNavBar } from "../NavBar"

test("<NavBar /> renders Brands on toggleClick", () => {
  const { debug, queryByTestId, getByTestId } = render(<PureNavBar />)
  expect(queryByTestId("nav-bar")).toBeTruthy()

  expect(queryByTestId("brands")).toBeFalsy()

  fireEvent.click(getByTestId("brands-toggler"))

  expect(queryByTestId("brands")).toBeTruthy()
})
