import React from "react"
import Layout from "../components/Layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import blogStyles from "./blog.module.scss"
import Head from "../components/Head"

const Blog = props => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              title
              date
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map((blog, i) => {
          console.log(blog.node.frontmatter.slug)
          return (
            <Link
              className={blogStyles.post}
              to={`blog/${blog.node.frontmatter.slug}`}
            >
              <li key={i}>
                <h3>{blog.node.frontmatter.title}</h3>
                <p className={blogStyles.date}>{blog.node.frontmatter.date}</p>
              </li>
            </Link>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog
