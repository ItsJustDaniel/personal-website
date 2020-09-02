import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import SideBlogStyles from "./SideBlogList.module.scss"

const SideBlog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      <ol className={SideBlogStyles.sidebar}>
        {data.allMarkdownRemark.edges.map((blog, i) => {
          return (
            <Link
              className={SideBlogStyles.sidebarPosts}
              to={`blog/${blog.node.frontmatter.title}`}
            >
              <li key={i}>
                <h3 className={SideBlogStyles.blogTitle}>
                  {blog.node.frontmatter.title}
                </h3>
                <h5 className={SideBlogStyles.date}>
                  {blog.node.frontmatter.date}
                </h5>
              </li>
            </Link>
          )
        })}
      </ol>
    </div>
  )
}
export default SideBlog
