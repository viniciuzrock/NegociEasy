import React, { useState, useContext } from 'react'
import styles from './Modal.module.css'
import AppContext from '../../../context/AppContext'
import { MdOutlineDone } from 'react-icons/md'
import SubmitButton from '../../SubmitButton/SubmitButton'
import { useNavigate } from 'react-router-dom'
type Props = {
    openModal?: boolean
}

const Modal = ({ }: Props) => {
    const { openModal, setOpenModal, setCartItems } = useContext(AppContext)

    const closeCart = () => {
        setOpenModal(false)
        setCartItems([])
    }

    return (
        <div>
            {openModal &&
                (
                    <>
                        <div className={styles.fade}></div>
                        <div className={styles.modal}>
                            <div className={styles.modalHeader}>
                                <MdOutlineDone />
                            </div>
                            <div className={styles.modalBody}>
                                <h3>Pedido recebido!</h3>
                                <span>Enviamos um e-mail com um resumo do seu pedido :)</span>
                            </div>
                            <div className={styles.modalFooter}>
                                <SubmitButton text='Fechar' custom='buy' onClick={closeCart} />
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Modal