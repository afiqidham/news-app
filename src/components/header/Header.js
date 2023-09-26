import React, { useEffect, useState } from "react";
import { Avatar, Box, Button, Chip, Grid, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";


const Header = ({keyword, handleSetKeyword}) => {

    const [isLoggedIn, setIsloggedIn] = useState(true);
    const [userName, setUserName] = useState('John');
    const navigate = useNavigate();
    

    const handleSearchClick = () => {
        
    };

    const handleLogout = () => {
        setIsloggedIn(false);
        setUserName('');
        navigate('/')
    }


    return(
        <div>
            <Stack direction="row" spacing={2}>
                <h4 style={{ marginRight:'40px' }}>News Finder</h4>
                <TextField 
                sx={{ width:"300px" }} 
                size="small" label="Search" 
                variant="outlined" 
                value={keyword} 
                onChange={(e)=> handleSetKeyword(e.target.value)}>                   
                </TextField>
                <Button onClick={handleSearchClick}>Search</Button>
                <Grid item>
                <Chip avatar={<Avatar alt="Natcha"/>} label={userName}/>
                </Grid>
                <Button 
                variant="contained" 
                size="small" 
                sx={{ height:"28px" }} 
                onClick={handleLogout}>Logout</Button>
            </Stack>
        </div>
    );
}

export default Header;