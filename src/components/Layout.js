import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import layoutStyles from "./Layout.module.css"
import StarField from "./Starfield"

const Layout = props => (
  <div className={layoutStyles.container}>
    <div className={layoutStyles.content}>
      <StarField />
      <Navbar />
      {props.children}
      <Footer />
    </div>
  </div>
)

export default Layout
