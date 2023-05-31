import React from 'react'
import styles from './ProductCard.module.css'
type Props = {
    name: string,
    price: number,
    image: string,
}

const ProductCard = ({ name, price, image }: Props) => {
    return (
        <div className={styles.card}>
            <img src={image} className={styles.img} alt="" />
            <p className={styles.txt}>{name}</p>
            <p>{price}</p>
        </div>

    )
}

export default ProductCard