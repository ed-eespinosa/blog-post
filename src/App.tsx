import React from 'react';
import './App.scss';
import {AppBar, Container, Grid, Toolbar} from "@mui/material";
import {Outlet} from "react-router-dom";
import Logo from "./components/logo/logo";
import MainMenu from "./components/main-menu/main-menu";


function App() {
    return (
        <div>
            <AppBar variant='elevation' position="static">
                <Container>
                    <Toolbar disableGutters>
                        <Grid container spacing={2}>
                            <Grid item alignContent='center' xs={1}>
                                <Logo/>
                            </Grid>
                            <Grid item xs={6}>
                                <MainMenu/>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
            <Container>
                <Outlet/>
            </Container>
        </div>
    );
}

export default App;
