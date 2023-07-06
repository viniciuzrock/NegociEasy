import React from 'react'
import Login from '../../../Form/Login/Login'
import styles from './AuthLogin.module.css'
import { Link } from 'react-router-dom'

type Props = {}

const AuthLogin = (props: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.container_register}>
                <span>
                    Crie sua conta
                </span>
                <Link to='/register' className={styles.link_button}>
                    Registre-se
                </Link>
            </div>
            <div className={styles.container_login}>
                <Login />
            </div>
        </div>
    )
}

export default AuthLogin