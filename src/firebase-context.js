import React, { useEffect, useState } from 'react'

import {auth} from './firebase'


export const AuthContext = React.createContext();


export const useFirebaseAuthentication = (fbAuth) => {
  const [authUser, setAuthUser] = useState(null);
  console.log('using fb auth on statechange ', fbAuth, authUser);

  useEffect(() => {
    let doAuthStateChange = async () => {
      fbAuth.onAuthStateChanged((userr) => {
        console.log('in eff ', userr);
      });
    }
    doAuthStateChange();
      console.log('using eff fb auth on statechange ', fbAuth, authUser);
  }, [authUser, setAuthUser])


  return authUser
} 

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log('in provider ', user)
      setCurrentUser(user)
      setPending(false)
    });
  }, [])
  
  if(pending) {
    console.log('is pending')
    return <>Loading</>
  }

  return (
    <AuthContext.Provider value={ {currentUser} }>{children}</AuthContext.Provider>
  )
}
