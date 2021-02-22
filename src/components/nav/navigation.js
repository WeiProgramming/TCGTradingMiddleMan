import React from 'react'
import './navigation.css'
import { TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'
import logo from '../../assets/icons/logo-placeholder.png'
import {HiSearch} from 'react-icons/hi';

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation__logo-container">
        <img
          className="navigation__logo"
          src={logo}
        />
      </div>
      <div className="navigation__search">
        <span className="navigation__icon-container"><HiSearch></HiSearch></span>
        <input type="text" className="navigation__search-field" name="searchSite"/>
      </div>
      <div className="navigation__links-container">
        <ul className="navigation__links">
          <li>
            <Link className="navigation__link-item" to="/dashboard">
              Profile
            </Link>
          </li>
          <li>
            <Link className="navigation__link-item" component="a" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navigation__link-item" component="a" to="">
              Trades
            </Link>
          </li>
          <li>
            <Link className="navigation__link-item" to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="navigation__link-item" to="/Register">
              Register
            </Link>
          </li>
          <li>
            <Link className="navigation__link-item" to="/logout">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation
