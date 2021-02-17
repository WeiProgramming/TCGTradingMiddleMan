import React from 'react';
import AuthFormComponent from '../../components/auth/auth-form';
import './auth-layout.css';

const AuthLayout = () => {
    return (
        <div className="auth-layout">
            <AuthFormComponent></AuthFormComponent>
        </div>
    )
}   

export default AuthLayout;