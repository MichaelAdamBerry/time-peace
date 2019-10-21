/** @jsx jsx */

import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import { css, jsx } from "@emotion/core"

const List = styled.ul`
  position: absolute;
  list-style: none;
  a {
    text-decoration: none;
    color: black;
  }
`

export const NoOptionAvailable = () => {
  return (
    <div className="no-options">
      <em>No Option!</em>
    </div>
  )
}

export const OptionResults = ({ products, selectedOption }) => {
  return (
    <List data-testid="auto-search-results">
      {products.map(product => {
        return (
          <li
            style={{
              fontWeight: `${
                selectedOption === product.node.title ? "500" : "200"
              }`,
            }}
            key={product.node.id}
          >
            <Link to={`/products/${product.node.handle}`}>
              {product.node.title}
            </Link>
          </li>
        )
      })}
    </List>
  )
}

export const PureAutoCompleteSearch = ({ allShopifyProduct }) => {
  const [userInput, setUserInput] = useState("")
  const [options, showOptions] = useState(false)
  const [resultsCount, setResultsCount] = useState(0)
  const [optionList, setOptionList] = useState([])
  const [selectedOption, setSelectedOption] = useState(null)

  const onChange = e => {
    const value = e.currentTarget.value
    if (value.length > 1) {
      showOptions(true)
    } else {
      showOptions(false)
    }
    setUserInput(value)

    const results = allShopifyProduct.edges.filter(edge => {
      return edge.node.title.toLowerCase().indexOf(value.toLowerCase()) > -1
    })

    setResultsCount(results.length)
    if (results.length > -1) {
      setOptionList(results)
    }
  }

  let optionView
  if (options && userInput) {
    if (optionList.length) {
      optionView = (
        <OptionResults products={optionList} selectedOption={selectedOption} />
      )
    } else {
      optionView = <NoOptionAvailable />
    }
  }

  return (
    <>
      <div
        className="search"
        css={css`
          gridrow: 2/3;
          gridcolumn: 2/3;

          input {
            background: none;
            border: none;
          }
          input:focus {
            outline: none;
          }

          @media (max-width: 425px) {
            input {
              display: none;
            }
          }
        `}
      >
        <img
          src="/search-icon.svg"
          alt="magnfying glass indicating search bar"
          style={{ padding: "10px 1rem 0 .5rem" }}
        />
        <input
          type="text"
          className="search-box"
          onChange={onChange}
          value={userInput}
          data-testid="text-box"
        />
      </div>
      <div
        style={{
          gridColumn: "2/3",
          gridRow: "3",
          opacity: ".99",
          zIndex: "200",
          backgroundColor: "white",
          left: "0px",
          boxShadow: "5px 5px 10px #2f2f2f99",
          height: `${options ? "200px" : "0px"}`,
          overflowY: `hidden`,
        }}
      >
        {optionView}
      </div>
    </>
  )
}

const AutoCompleteSearch = () => {
  const { allShopifyProduct } = useStaticQuery(graphql`
    query fullListing {
      allShopifyProduct {
        edges {
          node {
            id
            tags
            description
            title
            descriptionHtml
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
          }
        }
      }
    }
  `)

  const [userInput, setUserInput] = useState("")
  const [options, showOptions] = useState(false)
  const [resultsCount, setResultsCount] = useState(0)
  const [optionList, setOptionList] = useState([])
  const [selectedOption, setSelectedOption] = useState(null)

  const onChange = e => {
    const value = e.currentTarget.value
    if (value.length > 1) {
      showOptions(true)
    } else {
      showOptions(false)
    }
    setUserInput(value)

    const results = allShopifyProduct.edges.filter(edge => {
      return edge.node.title.toLowerCase().indexOf(value.toLowerCase()) > -1
    })

    setResultsCount(results.length)
    if (results.length > -1) {
      setOptionList(results)
    }
  }

  let optionView
  if (options && userInput) {
    if (optionList.length) {
      optionView = (
        <OptionResults products={optionList} selectedOption={selectedOption} />
      )
    } else {
      optionView = <NoOptionAvailable />
    }
  }

  return (
    <>
      <div
        className="search"
        css={css`
          gridrow: 2/3;
          gridcolumn: 2/3;

          input {
            background: none;
            border: none;
          }
          input:focus {
            outline: none;
          }
          @media (max-width: 425px) {
            display: none;
          }
        `}
      >
        <img
          src="/search-icon.svg"
          alt="magnfying glass indicating search bar"
          style={{ padding: "10px 1rem 0 .5rem" }}
        />
        <input
          type="text"
          className="search-box"
          onChange={onChange}
          value={userInput}
          data-testid="text-box"
        />
      </div>
      <div
        style={{
          gridColumn: "2/3",
          gridRow: "3",
          opacity: ".99",
          zIndex: "200",
          backgroundColor: "white",
          left: "0px",
          boxShadow: "5px 5px 10px #2f2f2f99",
          height: `${options ? "200px" : "0px"}`,
          overflowY: `hidden`,
        }}
      >
        {optionView}
      </div>
    </>
  )
}

export default AutoCompleteSearch
