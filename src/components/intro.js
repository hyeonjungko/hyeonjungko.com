import React from "react"
import introStyles from "./intro.module.css"

export default ({ children }) => (
  <div className={introStyles.intro}>{children}</div>
)