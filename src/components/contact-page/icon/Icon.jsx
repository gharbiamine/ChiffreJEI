import React from 'react'

import styles from './Icon.module.css'

export const Icon = ({src}) => {
    return (
        <div className={styles.global}>
           <img src={src} className={styles.icon}/> 
        </div>
    )
}
