import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import SideBlog from "../components/SideBlogList.js"
import BlogPostStyles from "./blog-post.module.scss"
import Head from "../components/Head"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { title: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`
export default function BlogPost(props) {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img className={BlogPostStyles.image} alt={alt} src={url} />
        console.log(alt)
        console.log(url)
      },
    },
  }
  return (
    <Layout>
      <Head title={props.data.markdownRemark.frontmatter.title} />
      <div className={BlogPostStyles.PostBody}>
        <SideBlog />

        <div className={BlogPostStyles.post}>
          <h1>{props.data.markdownRemark.frontmatter.title}</h1>
          <p>{props.data.markdownRemark.frontmatter.date}</p>
          <div
            dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
          ></div>
        </div>
      </div>
    </Layout>
  )
}
