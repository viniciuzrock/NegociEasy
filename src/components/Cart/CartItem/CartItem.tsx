import React, { useContext } from 'react'
import styles from './CartItem.module.css'
import { BsFillCartDashFill } from 'react-icons/bs'
import formatCurrency from '../../../utils/formatCurrency'
import AppContext from '../../../context/AppContext'
type Props = {
    thumbnail: string,
    name: string,
    price: number
}

const CartItem = ({ thumbnail, name, price }: Props) => {

    const { setCartItems } = useContext(AppContext)
    return (
        <section className={styles.cart_item}>
            <img src={thumbnail} alt={thumbnail}
                className={styles.cart_item_image}
            />
            <div className={styles.cart_item_content}>
                <h3 className={styles.cart_item_title}>{name}</h3>
                <h3 className={styles.cart_item_price}>{formatCurrency(price, 'BRL')}</h3>
                <button type='button' className={styles.button_remove_item}>
                    <BsFillCartDashFill />
                </button>
            </div>
        </section>
    )
}

export default CartItem