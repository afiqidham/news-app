import { Box, Button, TextField } from '@mui/material';
import { AccountCircleRounded, Password } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Login = () => {
    return(
        <div style={{ marginTop:'100px', textAlign:'center' }}>
            <h1>NEWS FINDER</h1>
            <h3>Login Account</h3>
            <Box sx={{ width: 250, height:200, textAlign:'center',  margin:'auto'}}>
            <Box sx={{ display:'flex', alignItems:'flex-end', marginBottom:'20px',}}>
                <AccountCircleRounded sx={{ color:'action.active', mr: 1, my: 0.5 }}/>
                <TextField id='username' label="Username" variant="standard" />
            </Box>
            <Box sx={{ display:'flex', alignItems:'flex-end', marginBottom:'20px'}}>
                <Password sx={{ color:'action.active', mr: 1, my: 0.5 }}/>
                <TextField id='password' label="Password" variant="standard" />
            </Box>
            <Link to='/home'>
            <Button variant='contained' color='secondary'> Login </Button>
            </Link>
            </Box>
        </div>
    );
}

export default Login;