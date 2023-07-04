import React, { useContext } from 'react'
import styles from './CartButton.module.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import AppContext from '../../../context/AppContext'

type Props = {}

const CartButton = (props: Props) => {


    const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext)

    return (
        <button type='button' className={styles.cart_button}
            onClick={() => setIsCartVisible(!isCartVisible)}
        >
            <AiOutlineShoppingCart />
            {cartItems.length > 0 &&
                <span className={styles.cart_status}>{cartItems.length}</span>
            }
        </button>
    )
}

export default CartButton