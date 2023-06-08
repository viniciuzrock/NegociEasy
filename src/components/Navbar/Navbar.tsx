import React from 'react'
import styles from './Navbar.module.css'
import { useNavigate } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
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
                    <div className={styles.searchContainer}>
                        <form>
                            <input
                                type="text"
                                placeholder='Buscar produtos'

                            />
                        </form>
                        <button type='submit'>
                            <BsSearch />
                        </button>
                    </div>
                    <div className={styles.submenu}>
                        <ul>
                            <li>Categorias</li>
                            <li>Minhas compras</li>
                            <li>Carrinho</li>
                            <li>Contato</li>
                        </ul>
                    </div>
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