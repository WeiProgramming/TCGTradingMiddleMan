import React, { useState } from 'react'

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
            name="pass"
            value={form['pass']}
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
          to="/dashboard"
        >
          {slug === 'register' ? 'Register' : 'Login'}
        </Button>
      </ButtonGroup>
    </Paper>
  )
}

export default AuthFormComponent
