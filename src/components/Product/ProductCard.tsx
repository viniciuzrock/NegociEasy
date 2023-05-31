import React from 'react'

type Props = {
    name: string,
    price: number,
    image: string,
}

const ProductCard = ({ name, price, image }: Props) => {
    return (
        <div>ProductCard
            <p>{name}</p>
            <p>{price}</p>
            <img src={image} alt="" />

        </div>

    )
}

export default ProductCard