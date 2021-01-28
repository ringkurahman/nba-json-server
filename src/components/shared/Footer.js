import React from "react"
import { NavLink } from "react-router-dom"


const Footer = () => (
  <footer>
    <div className="flexbox-container">
      <NavLink to="/" exact activeStyle={{ color: "red" }} className="logo">
        <span></span>
      </NavLink>
    </div>
  </footer>
)

export default Footer
