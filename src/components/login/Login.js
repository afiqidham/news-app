import { Box, Grid, Button, TextField, LinearProgress, Snackbar, Alert } from '@mui/material';
import { AccountCircleRounded, Password } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Login = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoggedIn, setIsloggedIn] = useState("");
    const [isLoginProgress, setIsLoginProgress] = useState(false);
    const navigate = useNavigate();

   const validateUser = () => {
    if (userName === 'John' && password === '12345') {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("userName", userName);
        return true;
    }
    return false;
   };

   const handleLogin = () => {
    setIsLoginProgress(true);

    setTimeout(() => {
        if(validateUser()) {
            setIsloggedIn(true);
            navigate('/home');
        } else {
            setErrorMessage('Invalid username and password');
        }
        setIsLoginProgress(false);
       }, 2000);
   };



   useEffect(() => {
    if(isLoggedIn) {
        navigate('/home');
    }
   }, [isLoggedIn, navigate]);


    return(
        <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ height: '50vh' }}>
            <h1>News Finder Login</h1>
        <Grid item xs={12}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
            disabled={isLoginProgress}
          >
            {isLoginProgress ? 'Logging in...' : 'Login'}
          </Button>
        </Grid>
        <Grid item xs={12}>
          <LinearProgress style={{ visibility: isLoginProgress ? 'visible' : 'hidden' }} />
        </Grid>
        <Snackbar open={errorMessage !== ''} autoHideDuration={3000} onClose={() => setErrorMessage('')}>
          <Alert severity="error" onClose={() => setErrorMessage('')}>
            {errorMessage}
          </Alert>
        </Snackbar>
      </Grid>
    );
}

export default Login;