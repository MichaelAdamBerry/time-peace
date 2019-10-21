import React from "react"
import Img from "gatsby-image"

import { ThumbImages } from "../styledComponents/ThumbImages"

const Thumbs = ({ images, handleBtnClick, handleThumbClick }) => {
  return (
    <ThumbImages>
      <div className="left-arrow">
        <img
          className="arrow-btn"
          alt="Scroll left button to change main image"
          src="/next.svg"
          onClick={() => handleBtnClick("left")}
          data-testid="left-btn"
        />
      </div>

      {images.map((img, indx) => (
        <div
          key={indx * Math.random() + 1}
          data-testid={`thumb-${indx}`}
          style={{
            width: "60px",
            height: "60px",
            boxShadow: "0px 0px 15px #2f2f2f99",
          }}
          onClick={() => handleThumbClick(indx + 1)}
        >
          <Img fluid={img.localFile.childImageSharp.fluid} />
        </div>
      ))}
      <div className="right-arrow">
        <img
          className="arrow-btn"
          alt="Scroll left button to change main image"
          src="/next.svg"
          onClick={() => handleBtnClick("right")}
          data-testid="right-btn"
        />
      </div>
    </ThumbImages>
  )
}

export default Thumbs
