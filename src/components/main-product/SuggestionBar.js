import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { Suggestions } from "../styledComponents/Suggestions"

const SuggestionBar = ({ currentProduct }) => {
  const { allShopifyProduct } = useStaticQuery(graphql`
    query allSuggestedProducts {
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
  const [currentProd, setCurrentProduct] = useState({})
  const [suggestedProds, setSuggestedProds] = useState([])

  useEffect(() => {
    setCurrentProduct(currentProduct)

    setSuggestedProds(() => {
      const data = allShopifyProduct.edges
        .reduce((acc, cur) => {
          let obj = { score: 0, node: cur }
          if (cur.node.id !== currentProduct.id) {
            currentProduct.tags.forEach(tag => {
              if (cur.node.tags.includes(tag)) {
                obj.score++
              }
            })
            acc.push(obj)
          }

          return acc
        }, [])
        .sort((a, b) => b.score - a.score)
        .slice(0, 4)
        .map(d => d.node)

      return data.concat(suggestedProds)
    })
  }, [])

  return (
    <Suggestions>
      <h3>you may also like</h3>
      <div className="images">
        {suggestedProds.map((prod, indx) => (
          <div
            style={{ gridColumn: `${indx + 1} / ${indx + 2}`, gridRow: "1/2" }}
            key={`${indx}${prod.node.title}`}
          >
            <Link to={`/products/${prod.node.handle}`}>
              {" "}
              <div className="img-container">
                <Img
                  fluid={prod.node.images[1].localFile.childImageSharp.fluid}
                />
              </div>
            </Link>
            <h4>{prod.node.title}</h4>
            <h4>
              ${prod.node.priceRange.maxVariantPrice.amount.split(".")[0]}
            </h4>
          </div>
        ))}
      </div>
    </Suggestions>
  )
}

export default SuggestionBar
