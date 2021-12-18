import React from 'react'

import styles from './Title.module.css';

export const Title = ({text}) => {
    return (
        <div className={styles.Title}>
            {text}
        </div>
    )
}
