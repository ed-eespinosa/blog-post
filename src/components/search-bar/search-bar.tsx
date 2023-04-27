import React from 'react';
import {Autocomplete, Button, TextField} from "@mui/material";
import styles from './search-bar.module.scss'
export default function SearchBar() {
    const options = [
        { name: 'The Year', post: 'Post HTML'}
    ]
    return (<div className={styles.searchBar}>
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options}
            getOptionLabel={(option) => option.name ?? option}
            sx={{width: '100%'}}
            renderInput={(params) => <TextField {...params} label="Search in the site"/>}
        />
        <Button style={{marginLeft: 10}} variant='contained' color='secondary'>SEARCH</Button>
    </div>);
}
