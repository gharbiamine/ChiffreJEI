import React from 'react'

import styles from './TextArea.module.css';

export const TextArea = () => {
    return (
        <div className={styles.global}>
            <textarea className={styles.textArea}/>
        </div>
    )
}
