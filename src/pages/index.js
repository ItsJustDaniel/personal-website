import React from "react"
import { Link } from "gatsby"
import "./index.css"
import About from "../components/About Me"
import Projects from "../components/Projects"
import Contacts from "../components/Contact"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Head from "../components/Head"

const IndexPage = () => (
  <Layout>
    <Head title="Home" />
    {/* Home-section */}
    <section id="welcome-section">
      <div>
        <h1 id="name">Daniel Li</h1>
        <p id="name-desc">Front End Developer</p>
      </div>
    </section>
    <div id="content-container">
      <About />
      <Projects />
      <Contacts />
    </div>
  </Layout>
)

export default IndexPage
