import React from 'react';
import {Box, Container} from "@mui/material";
import Hero from "../../components/hero/hero";
import MainContent from "../../components/main-content/main-content";

export default function Home() {
    return (<Container disableGutters>
            <Box mt={3}>
                <Hero/>
                <MainContent/>
            </Box>
        </Container>
    );
}
