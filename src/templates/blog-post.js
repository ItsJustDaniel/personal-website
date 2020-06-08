import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SideBlog from "../components/SideBlogList.js"
import BlogPostStyles from "./blog-post.module.scss"
import Head from "../components/head"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
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
      <Head title={props.data.contentfulBlogPost.title} />
      <div className={BlogPostStyles.PostBody}>
        <SideBlog />
        <div className={BlogPostStyles.post}>
          <h1>{props.data.contentfulBlogPost.title}</h1>
          <p>{props.data.contentfulBlogPost.date}</p>
          {documentToReactComponents(
            props.data.contentfulBlogPost.body.json,
            options
          )}
        </div>
      </div>
    </Layout>
  )
}
