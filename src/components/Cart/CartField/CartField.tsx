import React from 'react'
import styles from './CartField.module.css'
import CartItem from '../CartItem/CartItem'
type Props = {}

const Cart = (props: Props) => {
    return (
        <section className={styles.cart}>
            <div className={styles.cart_items}>
                <CartItem thumbnail={'teste'} title={'teste'} price={200} />
            </div>
            <div className={styles.cart_resume}>
                Resumo do carrinho
            </div>
        </section>
    )
}

export default Cart