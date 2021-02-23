import React, { useEffect, useState } from 'react'
import './navigation.css'
import { TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'
import logo from '../../assets/icons/logo-placeholder.png'
import {HiSearch} from 'react-icons/hi';

import {signOut, authState} from '../../services/api/firebase-auth'
import {useHistory} from 'react-router-dom'

function Navigation() {
  let routeHistory = useHistory();
  let [user, setUser] = useState({user: {}})

  useEffect(async () => {
    let auth = await authState()
    console.log('auth', auth)
    auth.onAuthStateChanged((fbUser) => {
      console.log('user ', fbUser)
      if(fbUser) {
        let newUserObj = {...fbUser}
        setUser((prevUser => (
          {...prevUser, user: {
            ...newUserObj
          }}
        )));
      }
      else {
        setUser((prevUser) => ({...prevUser, user: {}}));
        console.log(user)
      }
    })
  }, [setUser])

  let handleLogout = async (e) => {
    e.preventDefault();
    let auth = await authState()
    auth.signOut().then(() => {
      console.log('signed out')
      routeHistory.push('/')
    }).catch(e => {
      console.log(e)
    })
  }
  console.log(user);
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
          {Object.keys(user.user).length ? (
            <React.Fragment>
          <div className="navigation__link-item">
            <Link component="a" to="/">
              Home
            </Link>
          </div>
          <div className="navigation__link-item">
            <Link component="a" to="/dashboard/list">
              Trades
            </Link>
          </div>
          <div className="navigation__link-item">
            <Link to="/dashboard" component="a">
              Profile
            </Link>
            </div>
          <div className="navigation__link-item">
            <Link to="/" component="a" onClick={(e) => {
              handleLogout(e)
            }}>
              Logout
            </Link>
          </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
          <div className="navigation__link-item">
            <Link to="/login">
              Login
            </Link>
          </div>
          <div className="navigation__link-item">
            <Link to="/register">
              Register
            </Link>
          </div>
            </React.Fragment>
          )}
        </div>
      </div>
      </div>
  )
}

export default Navigation
