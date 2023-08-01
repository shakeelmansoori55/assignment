import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css"

export const Navbar=()=> {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <nav>
    <Link to="/" className="title">
      Assignment
    </Link>
    <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul className={menuOpen ? "open" : ""}>
      <li>
        <NavLink to="/">HOME</NavLink>
      </li>
      <li>
        <NavLink to="/mytable">MY TABLE</NavLink>
      </li>
      <li>
        <NavLink to="/chart">CHART</NavLink>
      </li>
    </ul>
  </nav>
  )
}
