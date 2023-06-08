import React from 'react'
import styles from './ProductCard.module.css'
import ProductForm from '../ProductForm/ProductForm'

type Props = {
    name: string,
    price: number,
    image: string,
}

const ProductCard = ({ name, price, image }: Props) => {
    return (
        <div>
            <ProductForm name={name} price={price} image={image} />
        </div>

    )
}

export default ProductCard