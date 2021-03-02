import React, { useEffect, useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useFirebaseAuthentication, AuthContext } from '../../firebase-context'

export const ProtectedRoute = ({ path, component: Component, ...rest }) => {
  let { currentUser } = useContext(AuthContext)
  console.log('protectedRoute ', currentUser)

  return !!currentUser ? (
    <Route {...rest} path={path} render={(props) => <Component {...props} />} />
  ) : (
    <Redirect to="/auth/login" />
  )
}
