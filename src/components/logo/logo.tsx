import React from 'react';
import styles from './logo.module.scss'

export default function Logo() {
    return (<div className={styles.logo}>
        <img src='https://picsum.photos/100/50' alt='logo' />
    </div>);
}
