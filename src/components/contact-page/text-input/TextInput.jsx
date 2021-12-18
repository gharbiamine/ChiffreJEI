import React from 'react'

import styles from './TextInput.module.css';

export const TextInput = ({id, isMail}) => {
    return (
        <div>
            <input type="text" id={id} name={id}
            className={styles.input} />
        </div>
    )
}
