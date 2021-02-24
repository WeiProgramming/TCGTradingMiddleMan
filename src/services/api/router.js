/* This file is for routing services found on the react-router library */

import React, {Component} from 'react'
import {Redirect, Route} from 'react-router-dom'

let ProtectedRoute = ({
    component,
    path,
    user,
    ...rest
}) => {
    return (
        <Route 
            {...rest}
            path={path}
            exact
            render={(props) => {
                return <Component />
            }}
        />
    )
}

export default ProtectedRoute;