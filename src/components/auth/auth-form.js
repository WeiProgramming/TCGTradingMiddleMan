import React, { useState, useContext } from 'react'

import {
  TextField,
  ButtonGroup,
  Button,
} from '@material-ui/core'

import { useParams, Link } from 'react-router-dom'

import './auth-form.css'

import firebase from '../../firebase';

import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getFirebaseAuthService} from '../../services/api/firebase-auth';
import {AuthContext} from '../../firebase-context'

const AuthFormComponent = () => {
  const {user} =useContext(AuthContext);
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPass: '',
  })
  let { slug } = useParams()


  const updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleAuthLogin = async () => {
    console.table(form);
    let user = await signInWithEmailAndPassword(form);
      if(user) {
        console.log('user exists');
      } else {
        console.log("user doesn't exist");
      }
  }
  const handleAuthRegister = async () => {
    let user = await createUserWithEmailAndPassword(form);
    console.table(user);
  }
  const getAuthState = () => {
    firebase.default.auth().onAuthStateChanged(user => {
      if(user) {
        
      }
    })
  }

  return (
    <div className="auth">
        <div>
          <h1>{slug === 'register' ? 'Register' : 'Login'}</h1>
        </div>
        <form className="auth__form">
          <label for="email">Email</label>
          <input
            name="email"
            value={form['email']}
            label="Email"
            control={<TextField />}
            onChange={(e) => updateForm(e)}
            labelPlacement="start"
            className="auth__textfield"
          />
          <FormControlLabel
            name="password"
            value={form['password']}
            label="Password"
            control={<TextField />}
            onChange={(e) => {
              updateForm(e)
            }}
            labelPlacement="start"
            className="auth__textfield"
          />

          {slug === 'register' ? (
            <span>
            <label for="confirmPass">Confirm Password</label>
            <input
              name="confirmPass"
              value={form['confirmPass']}
              label="Confirm Password"
              control={<TextField />}
              onChange={(e) => {
                updateForm(e)
              }}
              labelPlacement="start"
              className="auth__textfield"
            />
            </span>
          ) : (
            ''
          )}
      <ButtonGroup>
        <Button
          variant="outlined"
          color="primary"
          component={Link}
          to=""
          onClick={() => {handleAuthLogin()}}
        >
          {slug === 'register' ? 'Register' : 'Login'}
        </Button>
        <Button
          variant="outlined"
          color="primary"
          component={Link}
          to=""
          onClick={() => {handleAuthRegister()}}
        >
          
          Register
        </Button>
      </ButtonGroup>
        </form>
    </div>
  )
}

export default AuthFormComponent
