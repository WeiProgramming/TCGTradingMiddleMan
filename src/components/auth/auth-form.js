import React, { useState } from 'react'

import {
  TextField,
  ButtonGroup,
  Button,
} from '@material-ui/core'

import {Redirect, useHistory} from 'react-router-dom'

import { useParams, Link } from 'react-router-dom'

import './auth-form.css'

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  addFireStoreUserDetail
} from '../../services/api/firebase-auth';

const AuthFormComponent = () => {
  const routeHistory = useHistory();
  const [form, setForm] = useState({
    username: '', 
    email: '',
    password: '',
    confirmPass: '',
  })
  let { authType } = useParams()

  
  const updateForm = (e) => {
    console.table(form)
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleAuthLogin = async (e) => {
    e.preventDefault();
      try {
        let user = await signInWithEmailAndPassword(form);
        if(user) {
          routeHistory.push('/dashboard');
        }
      } catch(e) {
        console.log('invalid');
      }
  }
  const handleAuthRegister = async (e) => {
    e.preventDefault();
    try {
      let user = await createUserWithEmailAndPassword(form);
      if(user) {
        addFireStoreUserDetail(user, form);
        routeHistory.push('/dashboard');
      }
    } catch(e) {
      console.log('invalid');
    }
  }
  return (
    <div className="auth">
        <div>
          <h1>{authType === 'register' ? 'Register' : 'Login'}</h1>
        </div>
        <form className="auth__form">
          {authType === 'register' ? (
            <React.Fragment>
            <label htmlFor="username">Username</label>
            <input
              name="username"
              value={form['usernamej']}
              label="Confirm Password"
              control={<TextField />}
              onChange={(e) => {
                updateForm(e)
              }}
              className="auth__textfield"
            />
            </React.Fragment>
          ) : (
            <></>
          )}
          <label htmlFor="email">Email</label>
          <input
            name="email"
            value={form['email']}
            label="Email"
            control={<TextField />}
            onChange={(e) => updateForm(e)}
            className="auth__textfield"
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            value={form['password']}
            label="Password"
            control={<TextField />}
            onChange={(e) => {
              updateForm(e)
            }}
            className="auth__textfield"
          />
          {authType === 'register' ? (
            <React.Fragment>
            <label htmlFor="confirmPass">Confirm Password</label>
            <input
              name="confirmPass"
              value={form['confirmPass']}
              label="Confirm Password"
              control={<TextField />}
              onChange={(e) => {
                updateForm(e)
              }}
              className="auth__textfield"
            />
            </React.Fragment>
          ) : (
            <></>
          )}
      <ButtonGroup>
        {authType !== 'register' ? (
        <Button
        variant="outlined"
        color="primary"
        component={Link}
        to=""
        onClick={(e) => {handleAuthLogin(e)}}
      >
        Login
      </Button>
        ) : (
          <Button
          variant="outlined"
          color="primary"
          component={Link}
          to=""
          onClick={(e) => {handleAuthRegister(e)}}
        >
          Register
        </Button>
        )}
        <Button
          variant="outlined"
          color="secondary"
          component={Link}
          to=""
          onClick={(e) => {<Redirect to="/"/>}}
        >
          Cancel
        </Button>
      </ButtonGroup>
        </form>
    </div>
  )
}

export default AuthFormComponent
