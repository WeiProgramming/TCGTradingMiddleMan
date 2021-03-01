import React, { useEffect, useState, useContext } from 'react'
import './navigation.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/icons/logo-placeholder.png'
import {HiSearch} from 'react-icons/hi';

import {signOut, authState} from '../../services/api/firebase-auth'
import {useHistory} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {AuthContext, useFirebaseAuthentication} from '../../firebase-context'
import {auth} from '../../firebase';

function Navigation() {
  const {currentUser} = useContext(AuthContext);
  let routeHistory = useHistory();
  let [navUser, setNavUser] = useState(null);

  // useEffect(() => {

  //   let auth = await authState()
  //   console.log('auth', auth)
  //   setIsLoading(!isLoading);
  //   auth.onAuthStateChanged((fbUser) => {
  //     console.log('user ', fbUser)
  //     if(fbUser) {
  //       let newUserObj = {...fbUser}
  //       setUser((prevUser => (
  //         {...prevUser, user: {
  //           ...newUserObj
  //         }}
  //       )));
  //       setIsLoading(!isLoading);
  //     }
  //     else {
  //       setUser((prevUser) => ({...prevUser, user: {}}));
  //       console.log(user)
  //       setIsLoading(!isLoading);
  //     }
  //   })

  // }, [setUser, setIsLoading])

  let handleLogout = async (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
      setNavUser(null);
      console.log('signed out')
      routeHistory.push('/')
    }).catch(e => {
      console.log(e)
    })
  }
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
          {currentUser ? (
          <React.Fragment>
          <div className="navigation__link-item">
            <Link component="a" to="/">
              <AiFillHome></AiFillHome> &nbsp; Home
            </Link>
          </div>
          <div className="navigation__link-item">
            <Link component="a" to="/dashboard/create">
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
        ) : (<React.Fragment>
          <div className="navigation__link-item">
            <Link to="/auth/login">
              Login
            </Link>
          </div>
          <div className="navigation__link-item">
            <Link to="/auth/register">
              Register
            </Link>
          </div>
        </React.Fragment>)}
        </div>
      </div>
    </div>
  )
}

export default Navigation
