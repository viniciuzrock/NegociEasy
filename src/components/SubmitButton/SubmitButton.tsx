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
    console.log(onClick);

    return (
        <button className={`${styles.btn} ${styles[custom]}`} onClick={onClick}>
            <div className={styles.loader_container}>
                {isLoading ?
                    <Loading />
                    :
                    <div>
                        {text === "Adicionar ao carrinho" ?
                            <div className={styles.addToCartBtn}>
                                <BsFillCartPlusFill />
                                {text}
                            </div>
                            :
                            <div>
                                {text}
                            </div>
                        }
                    </div>
                }
            </div>

        </button>
    )
}

export default SubmitButton