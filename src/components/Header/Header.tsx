import React from 'react'
import styles from './Header.module.css'
type Props = {}

const Header = (props: Props) => {
    return (
        <div className='App'>
            <header className={styles.header}>
                <h1>Negocieasy</h1>
            </header>
        </div>

    )
}

export default Header