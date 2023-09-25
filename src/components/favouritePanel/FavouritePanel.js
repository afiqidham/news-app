import React from "react";
import { Avatar, Box, Button, Chip, Grid, Stack, TextField } from "@mui/material";

const FavouritePanel = () => {
    return(
        <Stack direction="row" spacing={4} sx={{ marginTop:'40px' }}>
            <p>Favourites</p>
            <Button variant="contained" size="small" sx={{ height:"25px" }}>Clear</Button>
        </Stack>
    );
}

export default FavouritePanel;