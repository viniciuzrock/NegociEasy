import React, { useEffect, useState, useContext } from 'react'
import styles from './Home.module.css'
import axios from 'axios'
import ProductCard from '../../ProductCard/ProductCard'
import Loading from '../../layout/Loading/Loading'
import AppContext from '../../../context/AppContext'


type Props = {
}

const Home = () => {
    const [products, setProducts] = useState([])
    const userEmail = localStorage.getItem('email')
    const { searchProduct } = useContext(AppContext)
    const { searchValue } = useContext(AppContext)
    const { setSearchValue } = useContext(AppContext)

    const fetchProducts = async (value: string) => {
        return await axios
            .get(`http://localhost:3010/api/products/products/${value}`)
            .then((products) => products.data)
            .catch((e) => {
                console.log('[Error Request]: ' + e);
                return []
            })
    }

    useEffect(() => {
        if (!searchProduct || searchProduct === '') {
            fetchProducts('all').then((data) => {
                setProducts(data)
                setSearchValue('')
            })
        } else {
            fetchProducts(searchProduct).then((data) => {
                setProducts(data)
                setSearchValue('')
            })
        }
    }, [searchProduct])

    return (
        <div className={styles.home}>
            <div className={styles.homeData}>
                <h2>Exibindo resultados para: {searchProduct}</h2>
            </div>
            {products.length > 0 ?
                <div className={styles.container}>
                    {products.length > 0 &&
                        products.map((product: any) => {
                            return (
                                <ProductCard
                                    name={product.title}
                                    price={product.price}
                                    image={product.thumbnail}
                                    key={product.id}
                                />
                            )
                        })
                    }
                </div>
                :
                <div className={styles.loadContainer}>
                    <Loading darkMode='teste' />
                </div>
            }
        </div>
    )
}

export default Home