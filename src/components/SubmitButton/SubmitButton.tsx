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
            <div className={styles.loader_container}>
                {isLoading ?
                    <Loading />
                    :
                    text}
            </div>

        </button>
    )
}

export default SubmitButton