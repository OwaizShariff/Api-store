import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useState } from "react";


function Signup() {
    const [fname, SetFname] = useState("");
    const [lname, SetLname] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [error, setError] = useState(false);
  
    const onFname = (event) => SetFname(event.target.value);
    const onLname = (event) => SetLname(event.target.value);
    const onEmail = (event) => SetEmail(event.target.value);
    const onPassword = (event) => SetPassword(event.target.value);
  
    const valiadateInputs = () => {
      if (
        fname.length === 0 ||
        lname.length === 0 ||
        email.length === 0 ||
        password.length === 0
      ) {
        setError(true);
        return true;
      } else {
        setError(false);
        return false;
      }
    };
    const submit = () => {
      if (!valiadateInputs()) {
        console.log(
          "Name = ",
          fname,
          lname,
          "Email = ",
          email,
          "Password = ",
          password
        );
      }
    };
    return (
        <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
           <h1 style={{margin:"20px"}}>Sign up</h1> 
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  onChange={onFname}
          value={fname}
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  onChange={onLname}
          value={lname}
                  id="lastName"
                  type="text"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={onEmail}
          value={email}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={onPassword}
          value={password}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Remember me"
                />
              </Grid>
            </Grid>
            <Button
            onClick={submit}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>    
            {error ? <h1>please enter the inputs</h1> : ""}   
      </Container>
        </div>
    )
}

export default Signup
