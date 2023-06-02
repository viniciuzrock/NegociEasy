import React from 'react'
import styles from './Navbar.module.css'
import { useNavigate } from 'react-router-dom'
type Props = {
    children: React.ReactNode
}

const Header = ({ children }: Props) => {

    const navigate = useNavigate()

    const logOut = async (e: React.MouseEvent<HTMLButtonElement>) => {
        navigate("/")
    }

    return (
        <div >
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <h1>Negocieasy</h1>
                </div>
                <div className={styles.menu}>
                    <ul>
                        <li>Categorias</li>
                        <li>Minhas compras</li>
                        <li>Sobre nós</li>
                        <li>Contato</li>
                    </ul>
                </div>
                <div className={styles.actions} >
                    <button onClick={logOut} >
                        LogOff
                    </button>

                </div>
            </nav>
            <main>{children}</main>
        </div>

    )
}

export default Header