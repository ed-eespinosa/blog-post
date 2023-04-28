import React, {useEffect} from 'react';
import {Box, Button, Grid, Typography} from "@mui/material";
import {PostsService} from "../../services/posts";
import {useLoaderData, useNavigate} from "react-router-dom";
import {Post} from "../../posts/posts.interfaces";
import PostForm from "../../components/post-form/post-form";
import Icon from '@mui/material/Icon';

// @ts-ignore
export function loader({params}) {
    const postService = PostsService.getInstance()
    const blogPost: Post | undefined = postService.getPost(params.id);
    return {blogPost};
}

export default function BlogsDetail() {
    const {blogPost} = useLoaderData() as { blogPost: Post };
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (!blogPost) {
            navigate('/blog')
        }
    }, [blogPost, navigate])

    return (<>
        <Box mt={3}>
            <Box mb={2}>
                <Button variant='contained' startIcon={<Icon>edit</Icon>} onClick={() => setOpen(true)}> Edit
                    Post</Button>
            </Box>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant='h3'>{blogPost?.name}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <div dangerouslySetInnerHTML={{__html: blogPost?.post ?? ''}}/>
                </Grid>
            </Grid>
        </Box>
        <PostForm post={blogPost} open={open} handleClose={handleClose}/>
    </>);
}
