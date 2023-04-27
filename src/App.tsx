import React from 'react';
import './App.scss';
import {AppBar, Container, Grid, Toolbar} from "@mui/material";
import {Outlet} from "react-router-dom";
import Logo from "./components/logo/logo";
import MainMenu from "./components/main-menu/main-menu";
import SearchBar from "./components/search-bar/search-bar";


function App() {
    return (
        <>
            <AppBar variant='elevation' position="static">
                <Container>
                    <Toolbar disableGutters>
                        <Grid container spacing={2}>
                            <Grid item alignContent='center' xs={1}>
                                <Logo/>
                            </Grid>
                            <Grid item xs={7}>
                                <MainMenu/>
                            </Grid>
                            <Grid item xs={4}>
                                <SearchBar/>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
            <Container>
                <Outlet/>
            </Container>
        </>
    );
}

export default App;
