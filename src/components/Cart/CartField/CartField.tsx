import React, { useContext } from 'react'
import styles from './CartField.module.css'
import CartItem from '../CartItem/CartItem'
import AppContext from '../../../context/AppContext'
type Props = {}

const Cart = (props: Props) => {
    const { cartItems } = useContext(AppContext)
    return (
        <section className={styles.cart}>
            <div className={styles.cart_items}>
                {
                    cartItems.map((cartItem: any) => {
                        return (
                            <CartItem
                                thumbnail={cartItem.image}
                                name={cartItem.name}
                                price={cartItem.price}
                                key={cartItem.id}
                            />
                        )
                    })
                }
            </div>
            <div className={styles.cart_resume}>
                Resumo do carrinho
            </div>
        </section>
    )
}

export default Cart