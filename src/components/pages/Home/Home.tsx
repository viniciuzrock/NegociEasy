import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import axios from 'axios'
import ProductCard from '../../ProductCard/ProductCard'
type Props = {}

const Home = (props: Props) => {
    const [products, setproducts] = useState([])
    const userEmail = localStorage.getItem('email')
    useEffect(() => {
        axios.get('http://localhost:3010/api/products/products').then((products) => {
            console.log(products.data);
            setproducts(products.data)

        }).catch((e) => {
            console.log('[Error Request]: ' + e);

        })
    }, [])

    return (
        <div className={styles.home}>
            <h1>Olá {userEmail}</h1>
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
        </div>
    )
}

export default Home