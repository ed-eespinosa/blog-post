import React from 'react';
import {Box, Divider, List, ListItem, ListItemText, Typography} from "@mui/material";

export default function Contact() {
    return (
        <Box mt={3}>
            <List sx={{width: '100%', maxWidth: 360}}>
                <ListItem alignItems="flex-start">
                    <ListItemText
                        primary={<Typography variant='h6'>Direction:</Typography>}
                        secondary={
                            <>
                                <Typography
                                    sx={{display: 'inline'}}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Ave. Salvador 4563, esq. San Alejandro
                                </Typography>
                            </>
                        }
                    />
                </ListItem>
                <Divider component="li"/><ListItem alignItems="flex-start">
                <ListItemText
                    primary={<Typography variant='h6'>Open:</Typography>}
                    secondary={
                        <>
                            <Typography
                                sx={{display: 'inline'}}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Monday to Friday from 9:00 to 17:00
                            </Typography>
                        </>
                    }
                />
            </ListItem>
                <Divider component="li"/><ListItem alignItems="flex-start">
                <ListItemText
                    primary={<Typography variant='h6'>Phone:</Typography>}
                    secondary={
                        <>
                            <Typography
                                sx={{display: 'inline'}}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Ali Connors
                            </Typography>
                        </>
                    }
                />
            </ListItem>
                <Divider component="li"/>
            </List>
        </Box>);
}
