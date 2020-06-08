/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using i
const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog-post.js")
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
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
