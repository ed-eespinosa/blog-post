import React from 'react';
import {Box} from "@mui/material";
import Hero from "../../components/hero/hero";
import MainContent from "../../components/main-content/main-content";

export default function Home() {
    return (
        <Box mt={3}>
            <Hero/>
            <MainContent/>
        </Box>
    );
}
