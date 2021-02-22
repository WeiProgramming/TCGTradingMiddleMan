import React, { useState, useContext } from 'react'

import {
  Paper,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
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
    <Paper className="auth-container">
      <FormControl component="fieldset">
        <FormLabel component="legend">
          <h1>{slug === 'register' ? 'Register' : 'Login'}</h1>
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            name="email"
            value={form['email']}
            label="Email"
            control={<TextField />}
            onChange={(e) => updateForm(e)}
          />
          <FormControlLabel
            name="password"
            value={form['password']}
            label="Password"
            control={<TextField />}
            onChange={(e) => {
              updateForm(e)
            }}
          />

          {slug === 'register' ? (
            <FormControlLabel
              name="confirmPass"
              value={form['confirmPass']}
              label="Confirm Password"
              control={<TextField />}
              onChange={(e) => {
                updateForm(e)
              }}
            />
          ) : (
            ''
          )}
        </FormGroup>
      </FormControl>
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
    </Paper>
  )
}

export default AuthFormComponent
