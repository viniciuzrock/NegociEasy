import React, { FormEvent, useState } from 'react'
import styles from './Navbar.module.css'
import { useNavigate, Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
type Props = {
    children: React.ReactNode
    onSearch: (searchValue: string) => void
}

const Navbar = ({ children, onSearch }: Props) => {

    const [searchValue, setSearchValue] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(searchValue)
    }

    const handleLogoClick = () => {
        onSearch(''); // Limpa o valor de pesquisa
        navigate('/home'); // Navega para a rota /home
    };

    const logOut = async (e: React.MouseEvent<HTMLButtonElement>) => {
        navigate("/")
    }

    return (
        <div >
            <nav className={styles.navbar}>
                <div className={styles.logo} onClick={handleLogoClick}>
                    <h1>NegociEasy</h1>
                </div>
                <div className={styles.menu}>
                    <div >
                        <form onSubmit={handleSubmit} className={styles.searchContainer}>
                            <input
                                type="text"
                                placeholder='Buscar produtos'
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                            />
                            <button type='submit'>
                                <BsSearch />
                            </button>
                        </form>
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

export default Navbar