import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import axios from 'axios'
import ProductCard from '../../Product/ProductCard'
type Props = {}

const Home = (props: Props) => {
    const [products, setproducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3010/api/products/products').then((products) => {
            console.log(products.data);
            setproducts(products.data)

        }).catch((e) => {
            console.log('[Error Request]: ' + e);

        })
    }, [])



    const getAllProducts = async () => {

    }
    return (
        <div>
            <h1>Home</h1>
            {products.length > 0 &&
                products.map((product: any) => {
                    return (
                        <ProductCard
                            name={product.name}
                            price={product.price}
                            image={product.thumbnail}
                            key={product.id}
                        />
                    )
                })

            }
        </div>
    )
}

export default Home