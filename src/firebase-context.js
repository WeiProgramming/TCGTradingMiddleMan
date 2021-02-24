import React, { useEffect, useState } from 'react'

import firebase from './firebase'

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    firebase.default.auth().onAuthStateChanged(user => {
      console.log('auth provider ', user)
      setUser(user)
    })
  }, [])

  return (
    <AuthContext.Provider value={ user }>{children}</AuthContext.Provider>
  )
}
