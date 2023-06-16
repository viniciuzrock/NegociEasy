import React, { useState } from 'react'
import AppContext from './AppContext'

const Provider = ({ children }) => {

    const [searchProduct, setSearchProduct] = useState('')
    const [searchValue, setSearchValue] = useState('')

    const value = {
        searchProduct,
        setSearchProduct,
        searchValue,
        setSearchValue
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default Provider