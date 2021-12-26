import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from "react-router-dom";
import { useState } from "react";

function Authentication() {
  const [fname, SetFname] = useState("");
  const [password, SetPassword] = useState("");
  const onFname = (event) => SetFname(event.target.value);
  const onPassword = (event) => SetPassword(event.target.value);
  const [error, setError] = useState(false);
  const valiadateInputs = () => {
    if (
      fname.length === 0 ||
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
        "Password = ",
        password
      );
    }
  };
  
  return (
    
    <div >
        <Container component="main" maxWidth="xs">
        <CssBaseline />
          <h1 style={{marginTop:"20px"}}>Sign in</h1>
            <TextField
            
              margin="normal"
              required
              fullWidth
              onChange={onFname}
              value={fname}
              type="text"
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={onPassword}
              value={password}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
             <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Remember me"
                />
            <Button
            onClick={submit}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
            <Button
            
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 0, mb: 2 }}
              >
              <Link to="/signup"><h3>Click here to Signup</h3></Link>
            </Button>
            {error ? <h1>please enter the inputs</h1> : "" }
      </Container>
    </div>
  );
}

export default Authentication;