import React from 'react'

import styles from './Label.module.css';

export const Label = ({text}) => {
    return (
        <div className={styles.global}>
            {text}
        </div>
    )
}
