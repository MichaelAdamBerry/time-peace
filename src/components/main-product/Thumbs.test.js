import React from "react"
import { render, fireEvent, waitForElement } from "@testing-library/react"
import Img from "gatsby-image"

import Thumbs from "./Thumbs"

const data = {
  images: [
    {
      localFile: {
        childImageSharp: {
          fluid: {
            aspectRatio: 1,
            base64: "",
            sizes: "(max-width: 800px) 100vw, 800px",
            src:
              "/static/d34c24e87c61d5178e9af70783138963/d47f1/seamaster-planet-ocean-2.jpg",
            srcSet:
              "/static/d34c24e87c61d5178e9af70783138963/91cbd/seamaster-planet-ocean-2.jpg 250w,/static/d34c24e87c61d5178e9af70783138963/9e575/seamaster-planet-ocean-2.jpg 500w,/static/d34c24e87c61d5178e9af70783138963/d47f1/seamaster-planet-ocean-2.jpg 800w ",
          },
        },
      },
    },
    {
      localFile: {
        childImageSharp: {
          fluid: {
            aspectRatio: 1,
            base64: "",
            sizes: "(max-width: 800px) 100vw, 800px",
            src:
              "/static/d34c24e87c61d5178e9af70783138963/d47f1/seamaster-planet-ocean-2.jpg",
            srcSet:
              "/static/d34c24e87c61d5178e9af70783138963/91cbd/seamaster-planet-ocean-2.jpg 250w,/static/d34c24e87c61d5178e9af70783138963/9e575/seamaster-planet-ocean-2.jpg 500w,/static/d34c24e87c61d5178e9af70783138963/d47f1/seamaster-planet-ocean-2.jpg 800w ",
          },
        },
      },
    },
    {
      localFile: {
        childImageSharp: {
          fluid: {
            aspectRatio: 1,
            base64: "",
            sizes: "(max-width: 800px) 100vw, 800px",
            src:
              "/static/d34c24e87c61d5178e9af70783138963/d47f1/seamaster-planet-ocean-2.jpg",
            srcSet:
              "/static/d34c24e87c61d5178e9af70783138963/91cbd/seamaster-planet-ocean-2.jpg 250w,/static/d34c24e87c61d5178e9af70783138963/9e575/seamaster-planet-ocean-2.jpg 500w,/static/d34c24e87c61d5178e9af70783138963/d47f1/seamaster-planet-ocean-2.jpg 800w ",
          },
        },
      },
    },
  ],
}

test("<Thumbs/>", async () => {
  const handleClickEvent = jest.fn()
  const handleThumbClickEvent = jest.fn()
  const { images } = await JSON.stringify(data)

  const { getByTestId, queryByTestId, debug } = render(
    <Thumbs
      images={data.images}
      handleBtnClick={handleClickEvent}
      handleThumbClick={handleThumbClickEvent}
    />
  )
  expect(queryByTestId("left-btn")).toBeTruthy()
  expect(queryByTestId("thumb-0")).toBeTruthy()
  expect(queryByTestId("thumb-1")).toBeTruthy()
  expect(queryByTestId("thumb-2")).toBeTruthy()
  expect(queryByTestId("right-btn")).toBeTruthy()

  fireEvent.click(getByTestId("left-btn"))

  expect(handleClickEvent).toHaveBeenCalledWith("left")

  fireEvent.click(getByTestId("right-btn"))

  expect(handleClickEvent).toHaveBeenCalledWith("right")

  expect(handleClickEvent).toHaveBeenCalledTimes(2)

  fireEvent.click(getByTestId("thumb-0"))

  expect(handleThumbClickEvent).toHaveBeenCalledTimes(1)
  expect(handleThumbClickEvent).toHaveBeenCalledWith(1)
})
