import React, {useCallback, useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {Post} from "../../posts/posts.interfaces";
import {PostsService} from "../../services/posts";
import {uid} from 'uid';

export type PostFormProps = {
    post?: Post;
    open: boolean;
    handleClose: () => void;
}

export default function PostForm({post, open, handleClose}: PostFormProps) {
    const [name, setName] = useState(post?.name ?? '');
    const [postHtml, setPostHtml] = useState(post?.post ?? '');
    const postService = PostsService.getInstance()

    const cleanInputs = useCallback(
        () => {
            setName('')
            setPostHtml('')
        },
        [],
    );

    const handleAddEdit = useCallback(() => {
            if (name && postHtml) {
                const blogPost: Post = {
                    id: post?.id ?? uid(),
                    name,
                    post: postHtml
                }
                if (post?.id) {
                    postService.edit(blogPost)
                } else {
                    postService.add(blogPost)
                }
                cleanInputs()
                handleClose()
            }
        }, [handleClose, name, postHtml, postService, cleanInputs],
    );


    return (
        <Dialog fullWidth open={open} onClose={handleClose}>
            <DialogTitle>{post ? 'Edit Post' : 'Create new Post'}</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    type="text"
                    required
                    fullWidth
                    onChange={ev => setName(ev.target.value)}
                    value={name}
                    variant="outlined"
                />
                <TextField
                    margin="dense"
                    id="name"
                    multiline
                    required
                    label="Post HTML"
                    type="text"
                    fullWidth
                    rows={20}
                    onChange={ev => setPostHtml(ev.target.value)}
                    value={postHtml}
                    variant="outlined"
                />

            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleAddEdit}>{post ? 'Edit' : 'Add'}</Button>
            </DialogActions>
        </Dialog>
    );
}
