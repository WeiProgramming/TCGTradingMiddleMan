import React from 'react';
import {CircularProgress} from '@material-ui/core';
// Components passes through here, this will either show a loading spinner or show the component

export const LoadingComponent = ({children}) => {
    return (
        <React.Fragment>
            {children ? (
                <React.Fragment>
                    {children}
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <CircularProgress></CircularProgress>
                </React.Fragment>
            )}
        </React.Fragment>
    )
}