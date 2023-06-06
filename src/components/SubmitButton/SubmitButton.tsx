import React from 'react'
import styles from './SubmitButton.module.css'
import Loading from '../layout/Loading/Loading'

type Props = {
    text: string,
    custom: string
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
    isLoading?: boolean
}

const SubmitButton = ({ text, custom, onClick, isLoading = false }: Props) => {

    return (
        <button className={`${styles.btn} ${styles[custom]}`} onClick={onClick}>
            {isLoading ?
                <Loading />
                :
                text}

        </button>
    )
}

export default SubmitButton