import React from 'react';
import styles from './logo.module.scss'
import {Link} from "react-router-dom";

export default function Logo() {
    return (<div className={styles.logo}>
        <Link to='/'>
            <img src='https://picsum.photos/100/50' alt='logo'/>
        </Link>
    </div>);
}
