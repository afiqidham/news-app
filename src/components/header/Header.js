import React from "react";
import { Avatar, Box, Button, Chip, Grid, Stack, TextField } from "@mui/material";

const Header = () => {
    return(
        <div>
            <Stack direction="row" spacing={2}>
                <h4 style={{ marginRight:'40px' }}>News Finder</h4>
                <TextField sx={{ width:"300px" }} size="small"></TextField>
                <Button>Search</Button>
                <Chip avatar={<Avatar alt="Natcha"/>} label="Username"/>
                <Button variant="contained" size="small" sx={{ height:"28px" }}>Logout</Button>
            </Stack>
        </div>
    );
}

export default Header;