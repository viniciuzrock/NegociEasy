import React from 'react'
import styles from './AuthRegister.module.css'
import { Link } from 'react-router-dom'
import Register from '../../../Form/Register/Register'

type Props = {}

const AuthRegister = (props: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.container_login}>
                <span>
                    Faça login
                </span>
                <Link to='/' className={styles.link_button}>
                    Entre
                </Link>
            </div>
            <div className={styles.container_register}>
                <Register />
            </div>
        </div>
    )
}

export default AuthRegister