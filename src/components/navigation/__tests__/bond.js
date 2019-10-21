import React from "react"
import { render, fireEvent, waitForElement } from "@testing-library/react"

import { PureNavBar } from "../NavBar"

test("<NavBar /> renders Bond on toggle click", () => {
  const { debug, queryByTestId, getByTestId } = render(<PureNavBar />)
  expect(queryByTestId("nav-bar")).toBeTruthy()

  expect(queryByTestId("bond")).toBeFalsy()

  fireEvent.click(getByTestId("bond-toggler"))

  expect(queryByTestId("bond")).toBeTruthy()
})
