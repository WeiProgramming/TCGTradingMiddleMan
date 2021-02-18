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
        <div className="navigation__links">
          <div className="navigation__link-item">
            <Link to="/dashboard">
              Profile
            </Link>
            </div>
          <div className="navigation__link-item">
            <Link component="a" to="/">
              Home
            </Link>
          </div>
          <div className="navigation__link-item">
            <Link component="a" to="">
              Trades
            </Link>
          </div>
          <div className="navigation__link-item">
            <Link to="/login">
              Login
            </Link>
          </div>
          <div className="navigation__link-item">
            <Link to="/Register">
              Register
            </Link>
          </div>
          <div className="navigation__link-item">
            <Link to="/logout">
              Logout
            </Link>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Navigation
