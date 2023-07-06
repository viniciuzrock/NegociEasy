import React, { FormEvent, useState, useEffect, useContext } from 'react'
import styles from './Navbar.module.css'
import { useNavigate, Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import AppContext from '../../context/AppContext'
import { CgLogOut } from 'react-icons/cg'
import CartButton from '../Cart/CartButton/CartButton'
type Props = {
}

const Navbar = () => {

    const { setSearchProduct, searchValue, setSearchValue, loading, setLoading } = useContext(AppContext)

    const navigate = useNavigate()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)
        setSearchProduct(searchValue)
    }

    const handleLogoClick = () => {
        navigate('/home');
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

                    <div>
                        <CartButton />
                    </div>
                    {/* <div className={styles.submenu}>
                        <ul>
                            <li>Categorias</li>
                            <li>Minhas compras</li>
                            <li>Carrinho</li>
                            <li>Contato</li>
                        </ul>
                    </div> */}
                </div>
                <div className={styles.actions} >
                    {/* <CartButton /> */}
                    <button onClick={logOut} >
                        {/* LogOff */}
                        <CgLogOut />
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar