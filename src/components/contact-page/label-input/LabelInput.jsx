import React from 'react'

import {Label} from '../label/Label'
import {TextInput} from '../text-input/TextInput'

import styles from "./LabelInput.module.css"

export const LabelInput = ({id, text, isMail}) => {
    return (
        <div className={`${isMail ? styles.mailContainer : styles.container}`}>
            <Label text={text} />
            <TextInput id={id} isMail={isMail} />
        </div>
    )
}
