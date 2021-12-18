import React from 'react'
import { InfoRow } from '../info-row/InfoRow';

import styles from './RedCircle.module.css';

export const RedCircle = () => {
    return (
        <div className={styles.container}
        style={{
            backgroundImage: "url(/assets/decorations/Red.png)"
        }}>
            <div className={styles.subTitle}>
                Comment nous contacter ?
            </div>
            <InfoRow src="assets/icons/Mail.png" text="jei@gmail.com" isMail={true} />
            <InfoRow src="assets/icons/Position.png" text="insaaaaaat" isMail={false} />
            <InfoRow src="assets/icons/Phone.png" text="22 959 968" isMail={false} />

        </div>
    )
}
