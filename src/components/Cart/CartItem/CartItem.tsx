import React from 'react'
import styles from './CartItem.module.css'
import { BsFillCartDashFill } from 'react-icons/bs'
import formatCurrency from '../../../utils/formatCurrency'
type Props = {
    thumbnail: string,
    title: string,
    price: number
}

const CartItem = ({ thumbnail, title, price }: Props) => {
    return (
        <section className={styles.cart_item}>
            <img src={thumbnail} alt={thumbnail}
                className={styles.cart_item_image}
            />
            <div className={styles.cart_item_content}>
                <h3 className={styles.cart_item_title}>{title}</h3>
                <h3 className={styles.cart_item_price}>{formatCurrency(price, 'BRL')}</h3>
                <button type='button' className={styles.button_remove_item}>
                    <BsFillCartDashFill />
                </button>
            </div>
        </section>
    )
}

export default CartItem