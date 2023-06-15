import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import axios from 'axios'
import ProductCard from '../../ProductCard/ProductCard'
import Loading from '../../layout/Loading/Loading'
import { useLocation } from 'react-router-dom'


type Props = {
    searchValue: string
}

const Home = ({ searchValue }: Props) => {
    const [products, setProducts] = useState([])
    const userEmail = localStorage.getItem('email')
    const location = useLocation()


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
        if (!searchValue || searchValue === '') {
            fetchProducts('all').then((data) => {
                setProducts(data)
            })
        } else {
            fetchProducts(searchValue).then((data) => {
                setProducts(data)
            })
        }
    }, [searchValue])

    const handleSearch = () => {
        const searchValue = new URLSearchParams(location.search).get('search')
        console.log('HOME - ' + searchValue);
    }

    useEffect(() => {
        handleSearch()
    }, [])

    return (
        <div className={styles.home}>
            <h1>Olá {userEmail}</h1>
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