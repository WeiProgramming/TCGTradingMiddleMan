import React, { useEffect, useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../../firebase-context'
import DefaultLayout from '../../layouts/default/default-layout'

export const ProtectedRoute = ({ path, component: Component, ...rest }) => {
  let { currentUser } = useContext(AuthContext)
  console.log('protectedRoute ', currentUser)

  return !!currentUser ? (
    <Route {...rest} path={path} render={(props) => <Component {...props} />} />
  ) : (
    <DefaultLayout></DefaultLayout>
  )
}
