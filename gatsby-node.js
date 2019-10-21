const path = require("path")
exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const pages = await graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            id
            handle
          }
        }
        distinct(field: tags)
      }
    }
  `)

  pages.data.allShopifyProduct.edges.forEach(edge => {
    createPage({
      path: `products/${edge.node.handle}`,
      component: path.resolve("./src/templates/product-page-template.js"),
      context: { id: edge.node.id, handle: edge.node.handle },
    })
  })
  pages.data.allShopifyProduct.distinct.forEach(tag => {
    createPage({
      path: `product-list/${tag}`,
      component: path.resolve("./src/templates/products-by-tag-template.js"),
      context: { handle: tag },
    })
  })
}
