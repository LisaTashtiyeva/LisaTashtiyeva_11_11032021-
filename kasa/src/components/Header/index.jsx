import React from "react"
import { Link, NavLink } from "react-router-dom"
import "./Header.css"
import logo from "../../assets/logo.svg"
class Header extends React.Component {
  render() {
    return (
      <header>
        <Link to="/">
          <img className="logo-Header" src={logo} alt="logo de Kasa" />
        </Link>
        <nav className="nav-Header">
          <NavLink className={(navData) => navData.isActive ? "selected links1" : "links1" } to="/">
            Accueil
          </NavLink>

          <NavLink className={(navData) => navData.isActive ? "selected links2" : "links2" } to="/about">
            À propos
          </NavLink>
        </nav>
      </header>
    )
  }
}

export default Header
