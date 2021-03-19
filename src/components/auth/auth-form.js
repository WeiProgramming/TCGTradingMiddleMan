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

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

// Config Auth Ui
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/dashboard',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
}

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
    <div className="auth" id="main-auth">
          {authType !== 'register' ? (
            <React.Fragment>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
            </React.Fragment>
          ) : (<form className="auth__form">
        <div>
          <h1>Register</h1>
        </div>
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
        <div className="btn-grp">
            <Button
            variant="outlined"
            color="primary"
            component={Link}
            to=""
            onClick={(e) => {handleAuthRegister(e)}}
          >
            Register
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            component={Link}
            to=""
            onClick={(e) => {<Redirect to="/"/>}}
          >
            Cancel
          </Button>
        </div>
        </form>)}
    </div>
  )}

export default AuthFormComponent
