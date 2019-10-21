/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"

const StyledButton = ({ title, icon, onClick, theme }) => {
  return (
    <button
      css={css`
        padding: 0;
        background-color: "none";
        cursor: pointer;

        .btn-container {
          display: flex;
          width: 188px;
          height: 44px;
        }

        .btn-content h3 {
          width: 144px;
        }

        .icon-container {
          width: 44px;
          height: 44px;
          backgroundcolor: #cccccc;
          display: grid;
          margin: 0;
          justify-items: center;
          align-items: center;
        }

        @media (max-width: 425px) {
          .btn-container {
            width: 150px;
            height: 30px;
          }

          .icon-container {
            width: 20px;
            height: 30px;
            margin-right: 5px;
          }
          .btn-content h3 {
            width: 120px;
            font-size: 10px;
          }
        }
      `}
      onClick={onClick}
    >
      <div className="btn-container">
        <div className="icon-container">
          <img style={{ marginBottom: "0" }} src={icon} />
        </div>
        <div
          className="btn-content"
          style={{
            backgroundColor: theme === "light" ? "#CCCCCC" : "#2B2B2B",
          }}
        >
          <h3
            style={{
              color: theme === "light" ? "#2b2b2b" : "#CCCCCC",
              fontSize: "13px",
            }}
          >
            {title}
          </h3>
        </div>
      </div>
    </button>
  )
}

export default StyledButton
