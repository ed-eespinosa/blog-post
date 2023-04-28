import React, {useCallback, useEffect, useState} from 'react';
import {Divider, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {Post} from "../../posts/posts.interfaces";
import {PostsService} from "../../services/posts";
import {useNavigate} from "react-router-dom";

export default function PostList() {
    const [posts, setPosts] = useState<Post[]>([]);
    const postService = PostsService.getInstance()
    const navigate = useNavigate()

    useEffect(() => {
        setPosts(postService.posts)
    }, [postService.posts]);

    const goToPost = useCallback((post: Post) => {
            navigate(`/blog/${post.id}`)
        }, [navigate],
    );

    return (
        <List>
            {posts.map(post => <div key={post.id}>
                    <ListItem  disablePadding>
                        <ListItemButton onClick={() => goToPost(post)}>
                            <ListItemText primary={post.name}/>
                        </ListItemButton>
                    </ListItem>
                    <Divider component="li"/>
                </div>
            )}
        </List>);
}
