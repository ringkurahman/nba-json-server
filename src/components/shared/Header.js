import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => (
  <header>
    <div className="flexbox-container">
      <NavLink to="/" exact activeStyle={{ color: "red" }} className="logo">
        <span></span>
            </NavLink>
            <nav>
                <NavLink to="/teams">Teams</NavLink>
            </nav>
    </div>
  </header>
)

export default Header