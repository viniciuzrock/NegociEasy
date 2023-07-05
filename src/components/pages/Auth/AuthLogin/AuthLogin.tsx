import React from 'react'
import Login from '../../../Form/Login/Login'
import styles from './AuthLogin.module.css'

type Props = {}

const Auth = (props: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.container_register}>
                <span>
                    Crie sua conta
                </span>
                <button>
                    Registre-se
                </button>
            </div>
            <div className={styles.container_login}>
                <Login />
            </div>
        </div>
    )
}

export default Auth