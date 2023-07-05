import React from 'react'
import styles from './ProductCard.module.css'
import ProductForm from '../ProductForm/ProductForm'

type Props = {
    name: string,
    price: number,
    image: string,
    id: any
}

const ProductCard = ({ name, price, image, id }: Props) => {
    return (
        <div>
            <ProductForm name={name} price={price} image={image} id={id} />
        </div>
    )
}

export default ProductCard