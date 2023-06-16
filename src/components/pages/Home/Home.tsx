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
    const { searchProduct, searchValue, setSearchValue, loading, setLoading } = useContext(AppContext)

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
                setLoading(false)
            })
        } else {
            fetchProducts(searchProduct).then((data) => {
                setProducts(data)
                setSearchValue('')
                setLoading(false)
            })
        }
    }, [searchProduct])

    return (
        <div className={styles.home}>
            <div className={styles.homeData}>
                {searchProduct &&
                    <h2>Exibindo resultados para: {searchProduct}</h2>
                }
            </div>
            {loading ?
                <div className={styles.loadContainer}>
                    <Loading darkMode='teste' />
                </div>
                :
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
            }
        </div>
    )
}

export default Home