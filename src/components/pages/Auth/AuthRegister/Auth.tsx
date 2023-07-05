import React from 'react'
import Login from '../../../Form/Login/Login'
import styles from './Auth.module.css'


type Props = {}

const Auth = (props: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.container_register}>
                register
            </div>
            <div className={styles.container_login}>
                <Login />
            </div>
        </div>
    )
}

export default Auth