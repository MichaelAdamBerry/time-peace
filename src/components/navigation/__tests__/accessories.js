import React from "react"
import { render, fireEvent, waitForElement } from "@testing-library/react"

import { PureNavBar } from "../NavBar"

test("<NavBar /> renders Accessories on toggle Cick", () => {
  const { debug, queryByTestId, getByTestId } = render(<PureNavBar />)
  expect(queryByTestId("nav-bar")).toBeTruthy()

  expect(queryByTestId("accessories")).toBeFalsy()

  fireEvent.click(getByTestId("accessories-toggler"))

  expect(queryByTestId("accessories")).toBeTruthy()
})
