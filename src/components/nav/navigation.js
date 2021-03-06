import React, { useState, useContext, useEffect } from 'react'
import './navigation.css'
import { Link } from 'react-router-dom'
import {HiSearch} from 'react-icons/hi';
import {CgProfile} from 'react-icons/cg';
import {useHistory} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {AuthContext} from '../../firebase-context'
import {auth} from '../../firebase';
import {getFireStoreUserDetail} from '../../services/api/firebase-auth'
import companyImg from '../../assets/images/company-logo.png'

import {getAllCategories} from '../../services/api/tcgplayer';

const SubNavigation = () => {
  let [categories, setCategories] = useState([]);
  useEffect(async () => {
    let tcgCategories;
    await getAllCategories.then(categories => {
      tcgCategories = categories["results"];
    }).catch(e => {
      console.log('sub nav categories ', e) 
    })
    setCategories(tcgCategories);
  }, [setCategories, categories]);
  console.table(categories);

  return (
    <div className="subnav">
      <div className="subnav__items">
          {categories.map(category => {
            return (
              <Link className="subnav__item" key={category.categoryId}>{category.displayName}</Link> 
            )
          })}
      </div> 
    </div>
  )
}

function Navigation() {
  const {currentUser} = useContext(AuthContext);
  let fireStoreUser;
  if(currentUser) {
    fireStoreUser = getFireStoreUserDetail(currentUser.uid);
  }
  
  let [userDetails, setUserDetails] = useState(null);
  let routeHistory = useHistory();


  useEffect(() => {
    if(!!currentUser) {
      fireStoreUser.then(user => {
        if(user) {
          setUserDetails(user);
        }
    }).catch((e) => {
      return console.log(e);
    })
    }

  }, [userDetails?.displayName])

  let handleLogout = async (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
      setUserDetails(null);
      console.log('signed out')
      routeHistory.push('/')
    }).catch(e => {
      console.log(e)
    })
  }

  return (
    <div className="navigation-full">
      <div className="navigation">
      <div className="navigation__logo-container">
        <Link to="/">
        <img
          className="navigation__logo"
          src={companyImg}
          alt="company logo"
        />
        </Link>
      </div>
      {/* <div className="navigation__search">
        <span className="navigation__icon-container"><HiSearch></HiSearch></span>
        <input type="text" className="navigation__search-field" name="searchSite"/>
      </div> */}
      <div className="navigation__links-container">
        <div className="navigation__links">
          {(currentUser) ? (
          <React.Fragment>
          <div className="navigation__link-item">
            <Link to="/">
              <AiFillHome></AiFillHome> &nbsp; Home
            </Link>
          </div>
          <div className="navigation__link-item">
            <Link to="/dashboard/create">
              Trades
            </Link>
          </div>
          <div className="navigation__link-item">
            <Link to="/dashboard/profile">
              <CgProfile></CgProfile>
              &nbsp;
              {userDetails ? `${userDetails.displayName}` : ``}
            </Link>
            </div>
            <div className="navigation__link-item">
            <Link to="/" onClick={(e) => {
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
    </div> 
  )
}

export default Navigation
