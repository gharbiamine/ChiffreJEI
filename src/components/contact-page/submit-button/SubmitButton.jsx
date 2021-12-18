import React from 'react'

import styles from "./SubmitButton.module.css"

export const SubmitButton = ({text}) => {
    return (
        <div className={styles.container}>
            <button className={styles.button}>{text}</button>
        </div>
    )
}
