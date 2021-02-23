import React, { useState, useContext } from 'react'

import {
  TextField,
  ButtonGroup,
  Button,
} from '@material-ui/core'

import {useHistory} from 'react-router-dom'

import { useParams, Link } from 'react-router-dom'

import './auth-form.css'

import firebase from '../../firebase';

import {
  createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
    signOut,
     getFirebaseAuthService} from '../../services/api/firebase-auth';
import {AuthContext} from '../../firebase-context'

const AuthFormComponent = () => {
  const routeHistory = useHistory();
  const {user} = useContext(AuthContext);
  const [form, setForm] = useState({
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
    console.table(user);
    try {
      let user = await createUserWithEmailAndPassword(form);
      if(user) {
        routeHistory.push('/');
      }
    } catch(e) {
      console.log('invalid');
    }
  }
  const getAuthState = () => {
    firebase.default.auth().onAuthStateChanged(user => {
      if(user) {
        
      }
    })
  }

  console.log('this is the user', user)
  return (
    <div className="auth">
        <div>
          <h1>{authType === 'register' ? 'Register' : 'Login'}</h1>
        </div>
        <form className="auth__form">
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
            <label htmlFor="confirmPass">Confirm Password</label>
          ) : (
            ''
          )}
          {authType === 'register' ? (
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
          ) : (
            ''
          )}
      <ButtonGroup>
        <Button
          variant="outlined"
          color="primary"
          component={Link}
          to=""
          onClick={(e) => {handleAuthLogin(e)}}
        >
          {authType === 'register' ? 'Register' : 'Login'}
        </Button>
        <Button
          variant="outlined"
          color="primary"
          component={Link}
          to=""
          onClick={(e) => {handleAuthRegister(e)}}
        >
          Register
        </Button>
      </ButtonGroup>
        </form>
    </div>
  )
}

export default AuthFormComponent
