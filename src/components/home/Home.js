import { Box, Button, Chip, Grid, Stack, TextField } from "@mui/material";


const Home = () =>{
    return(
            <Grid container className="main-container" direction={"column"}>
                <Grid className="header-container" item lg={1} style={{ maxHeight:"10vh" }}>
                    <Stack direction="row" spacing={3}>
                        <h4 style={{ marginRight:'40px' }}>News Finder</h4>
                        <TextField sx={{ width:"300px" }} size="small"></TextField>
                        <Button>Search</Button>
                        <Chip label="Username"/>
                        <Button>Logout</Button>
                    </Stack>
                </Grid>
                <Grid className="content-container" item lg={11}>
                    <Grid container direction="row" style={{ height:"100%" }}>
                        <Grid className="left-panel-container" item lg={2.5}>
                            <Stack direction="row" spacing={4} sx={{ marginTop:'40px' }}>
                                <p>Favourites</p>
                                <Button variant="contained">Clear</Button>
                            </Stack>
                        </Grid>
                        <Grid className="result-container" item lg={9.5}>
                            
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
    );
}

export default Home;