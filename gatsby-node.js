/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using i
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: "slug",
      file: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog-post.js")
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      component: path.resolve(`./src/templates/blog-post.js`),
      path: `/blog/${node.frontmatter.title}`,
      context: {
        slug: node.frontmatter.title,
      },
    })
  })
}

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const result = await graphql(`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             frontmatter {
//               title
//             }
//           }
//         }
//       }
//     }
//   `)
//   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     createPage({
//       path: `/blog/${node.frontmatter.title}`,
//       component: path.resolve(`./src/templates/blog-post.js`),
//       context: {
//         slug: node.frontmatter.title,
//       },
//     })
//   })
// }
