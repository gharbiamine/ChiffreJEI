import React from 'react'

import styles from './ContactLabel.module.css'

export const ContactLabel = ({text, isMail}) => {
    return (
        <div className={`${styles.global} ${isMail ? styles.underlined : ""}`}>
            {text}
        </div>
    )
}
