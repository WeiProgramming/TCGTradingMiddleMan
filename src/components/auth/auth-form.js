import React, { useState } from 'react'

import {
  TextField,
  ButtonGroup,
  Button,
} from '@material-ui/core'

import { useParams, Link } from 'react-router-dom'

import './auth-form.css'

const AuthFormComponent = () => {
  const [form, setForm] = useState({
    email: '',
    pass: '',
    confirmPass: '',
  })
  let { slug } = useParams()

  const updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
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
          <label for="password">Password</label>
          <input
            name="pass"
            value={form['pass']}
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
          to="/dashboard"
        >
          {slug === 'register' ? 'Register' : 'Login'}
        </Button>
      </ButtonGroup>
        </form>
    </div>
  )
}

export default AuthFormComponent
