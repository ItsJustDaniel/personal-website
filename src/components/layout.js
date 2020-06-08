import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import layoutStyles from "./Layout.module.css"

const Layout = props => (
  <div className={layoutStyles.container}>
    <div className={layoutStyles.content}>
      <Navbar />
      {props.children}
    </div>
    <Footer />
  </div>
)

export default Layout
