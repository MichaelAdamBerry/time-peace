/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header"
import NavBar from "./navigation/NavBar"
import SEO from "../components/seo"
import "./layout.css"

const LayoutStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 20vh 85vh 40vh 20vh 30vh;
  min-height: 200vh;

  .header {
    grid-column: 2/8;
    grid-row: 1/2;
  }

  @media (max-width: 425px) {
    grid-template-rows: unset;

    .header {
      grid-row: 1/2;
      grid-column: 1/9;
    }
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <LayoutStyle>
      <div className="header">
        <SEO title="Time Peace" />
        <Header siteTitle="TimePeace" />
        <NavBar />
      </div>
      {children}
    </LayoutStyle>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
