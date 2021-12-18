import React from 'react'

import {BlueCircle} from '../blue-circle/BlueCircle'
import {RedCircle} from '../red-circle/RedCircle'
import {Title} from '../title/Title'
import {Label} from '../label/Label'
import {LabelInput} from '../label-input/LabelInput'
import {TextArea} from '../text-area/TextArea'
import { SubmitButton } from '../submit-button/SubmitButton'


import styles from "./ContactFrame.module.css"

export const ContactFrame = () => {
    return (
        <div className={styles.container}>
            <RedCircle />
            <BlueCircle />
            <Title text="Contactez-nous"/>
            <div className={styles.row}>
                <LabelInput id="lname" text="Nom" />
                <LabelInput id="fname" text="Prénom" />
            </div>
            <div className={styles.column}>
                <div className={styles.flexItem}>
                    <LabelInput id="mail" text="Adresse Mail" isMail/>
                </div>
                <div className={styles.flexItem}>
                    <Label text="Description" className={styles.flexItem} />
                    <TextArea text="" />
                </div>
                <div className={styles.flexItem}>
                    <SubmitButton text="Envoyer" />
                </div>
            </div>
        </div>
    )
}
