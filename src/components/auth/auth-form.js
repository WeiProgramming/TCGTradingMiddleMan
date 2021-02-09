import React from 'react';

import {
    Paper,
    Container,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    TextField
} from '@material-ui/core'

const AuthFormComponent = () => {
    return (
        <Container>
            <Paper>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Login</FormLabel>
                    <FormGroup>
                    <FormControlLabel
                    value="email"
                    label="Email"
                    control={<TextField/>}
                    />
                    <FormControlLabel
                    value="password"
                    label="Password"
                    control={<TextField/>}
                    />
                    </FormGroup>
                    </FormControl>
                
                <FormControl component="fieldset">
                    <FormLabel component="legend">Register</FormLabel>
                    <FormGroup>
                    <FormControlLabel
                    value="email"
                    label="Email"
                    control={<TextField/>}
                    />
                    <FormControlLabel
                    value="password"
                    label="Password"
                    control={<TextField/>}
                    />
                    <FormControlLabel
                    value="confirmpassword"
                    label="Confirm Password"
                    control={<TextField/>}
                    />
                    </FormGroup>
                </FormControl>
            </Paper>
        </Container>
    )
}

export default AuthFormComponent;