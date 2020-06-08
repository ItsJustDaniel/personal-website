import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import SideBlogStyles from "./SideBlogList.module.scss"

const SideBlog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  return (
    <div>
      <ol className={SideBlogStyles.sidebar}>
        {data.allContentfulBlogPost.edges.map((blog, i) => {
          return (
            <Link
              className={SideBlogStyles.sidebarPosts}
              to={`blog/${blog.node.slug}`}
            >
              <li key={i}>
                <h2 className={SideBlogStyles.blogTitle}>{blog.node.title}</h2>
              </li>
            </Link>
          )
        })}
      </ol>
    </div>
  )
}
export default SideBlog
