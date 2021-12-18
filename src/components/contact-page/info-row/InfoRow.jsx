import React from 'react'
import { ContactLabel } from '../contact-label/ContactLabel'
import { Icon } from '../icon/Icon'

import styles from './InfoRow.module.css'

export const InfoRow = ({src, text, isMail}) => {
    return (
        <div className={styles.container}>
            <Icon src={src} />
            <ContactLabel text={text} isMail={isMail} />
        </div>
    )
}
