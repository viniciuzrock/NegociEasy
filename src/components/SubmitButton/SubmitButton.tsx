import React from 'react'
import styles from './SubmitButton.module.css'
import Loading from '../layout/Loading/Loading'
import { BsFillCartPlusFill } from 'react-icons/bs'
type Props = {
    text: string,
    custom: string
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
    isLoading?: boolean
}

const SubmitButton = ({ text, custom, onClick, isLoading = false }: Props) => {
    return (
        // <button className={`${styles.btn} ${styles[custom]}`} onClick={onClick}>
        <button className={` ${styles[custom]}`} onClick={onClick}>
            {isLoading ?
                <div className={styles.loader_container}>
                    <Loading />
                </div>
                :
                <div>
                    {text === "Adicionar ao carrinho" ?
                        <div className={styles.addCart}>
                            <BsFillCartPlusFill />
                        </div>
                        :
                        <div>
                            {text}
                        </div>
                    }
                </div>
            }
        </button>
    )
}

export default SubmitButton