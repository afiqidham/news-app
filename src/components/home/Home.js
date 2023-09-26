import { Grid } from "@mui/material";
import Header from "../header/Header";
import FavouritePanel from "../favouritePanel/FavouritePanel";
import { useState } from "react";


const Home = () =>{
    const [keyword, setKeyword] = useState('');
    return(
            <Grid container className="main-container" direction={"column"}>
                <Grid className="header-container" item lg={1} style={{ maxHeight:"10vh" }}>
                    <Header/>
                </Grid>
                <Grid className="content-container" item lg={11}>
                    <Grid container direction="row" style={{ height:"100%" }}>
                        <Grid className="left-panel-container" item lg={2.5}>
                            <FavouritePanel/>
                        </Grid>
                        <Grid className="result-container" item lg={9.5}>
                            
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
    );
}

export default Home;