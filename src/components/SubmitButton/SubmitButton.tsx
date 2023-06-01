import React from 'react'
import styles from './SubmitButton.module.css'
type Props = {
    text: string,
    custom: string
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const SubmitButton = ({ text, custom, onClick }: Props) => {

    return (
        <button className={`${styles.btn} ${styles[custom]}`} onClick={onClick}>{text}</button>
    )
}

export default SubmitButton