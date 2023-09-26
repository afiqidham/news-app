import { Box, Button, TextField } from '@mui/material';
import { AccountCircleRounded, Password } from '@mui/icons-material';
import { Link, Navigate } from 'react-router-dom';
import React, { useState } from 'react';

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const isLoggedIn = (e) => {
        e.preventDefault();
        if(userName === "John" && password === "1234") {
            localStorage.setItem("loggedIn", "true");
         <Navigate to="/home"></Navigate>;
        } else {
            alert("Check your username and password");
        }
    };

    return(
        <div style={{ marginTop:'100px', textAlign:'center' }}>
            <h1>NEWS FINDER</h1>
            <h3>Login Account</h3>
            <form className='ui form' onSubmit={isLoggedIn}> 
            <Box sx={{ width: 250, height:200, textAlign:'center',  margin:'auto'}}>
            <Box sx={{ display:'flex', alignItems:'flex-end', marginBottom:'20px',}}>
                <AccountCircleRounded sx={{ color:'action.active', mr: 1, my: 0.5 }}/>
                <TextField id='username' label="Username" variant="standard" value={userName} onChange={(e)=> setUserName(e.target.value)}/>
            </Box>
            <Box sx={{ display:'flex', alignItems:'flex-end', marginBottom:'20px'}}>
                <Password sx={{ color:'action.active', mr: 1, my: 0.5 }}/>
                <TextField id='password' label="Password" variant="standard" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            </Box>
            <Button variant='contained' color='secondary' type='submit'> Login </Button>
            </Box>
            </form>
        </div>
    );
}

export default Login;