import React from "react"
import contactStyles from "./contact.module.css"

export default ({ children }) => (
  <div className={contactStyles.contact}>{children}</div>
)