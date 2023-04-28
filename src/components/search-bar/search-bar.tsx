import React, {useCallback, useEffect, useState} from 'react';
import {Autocomplete, Button, TextField} from "@mui/material";
import styles from './search-bar.module.scss'
import {PostsService} from "../../services/posts";
import {Post} from "../../posts/posts.interfaces";
import {useNavigate} from "react-router-dom";

export default function SearchBar() {
    const [posts, setPosts] = useState<Post[]>([]);
    const navigate = useNavigate()
    const postsService = PostsService.getInstance()

    useEffect(() => {
        setPosts(postsService.posts)
    }, [postsService.posts]);

    const goToPost = useCallback((post: Post | null) => {
            if (post) {
                navigate(`/blog/${post.id}`)
            }
        }, [navigate],
    );


    return (<div className={styles.searchBar}>
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={posts}
            blurOnSelect
            onChange={(ev, value) => goToPost(value)}
            getOptionLabel={(option) => option.name ?? option}
            sx={{width: '100%'}}
            renderInput={(params) => <TextField {...params} label="Search in the site"/>}
        />
    </div>);
}
