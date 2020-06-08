import React from "react"
import Layout from "../components/Layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"

const Blog = props => {
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
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((blog, i) => {
          return (
            <Link className={blogStyles.post} to={`blog/${blog.node.slug}`}>
              <li key={i}>
                <h2>{blog.node.title}</h2>
                <p className={blogStyles.date}>{blog.node.publishedDate}</p>
              </li>
            </Link>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog
