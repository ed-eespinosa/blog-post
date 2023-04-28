import React from 'react';
import {Box, Button, Container} from "@mui/material";
import PostList from "../../components/post-list/post-list";
import PostForm from "../../components/post-form/post-form";
import Icon from "@mui/material/Icon";

export default function Blogs() {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    return (<>
        <Box mt={3}>
            <Button variant='contained' startIcon={<Icon>add</Icon>} onClick={()=>setOpen(true)}> Create Post</Button>
            <PostList/>
            <PostForm open={open} handleClose={handleClose}/>
        </Box>
    </>);
}
