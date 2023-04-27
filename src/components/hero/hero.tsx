import React from 'react';
import styles from './hero.module.scss'
export default function Hero() {
    return (<div className={styles.hero}>
        <img src='https://picsum.photos/1000/500' alt='hero' />
    </div>);
}
