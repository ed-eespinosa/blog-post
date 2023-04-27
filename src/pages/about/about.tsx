import React from 'react';
import {Box, Container} from "@mui/material";
import MainContent from "../../components/main-content/main-content";

export default function About() {
    return (<Container disableGutters>
            <Box mt={3}>
                <MainContent/>
            </Box>
        </Container>
    );
}
