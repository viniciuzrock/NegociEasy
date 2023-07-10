import React, { useState } from 'react'
import AppContext from './AppContext'

const Provider = ({ children }) => {

    const [searchProduct, setSearchProduct] = useState('')
    const [searchValue, setSearchValue] = useState('')
    const [loading, setLoading] = useState(true)
    const [cartItems, setCartItems] = useState([])
    const [isCartVisible, setIsCartVisible] = useState(false)
    const [openModal, setOpenModal] = useState(false)

    const value = {
        searchProduct,
        setSearchProduct,
        searchValue,
        setSearchValue,
        loading,
        setLoading,
        cartItems,
        setCartItems,
        isCartVisible,
        setIsCartVisible,
        openModal,
        setOpenModal
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default Provider