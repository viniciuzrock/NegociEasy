import React, { useContext } from 'react'
import styles from './CartField.module.css'
import CartItem from '../CartItem/CartItem'
import AppContext from '../../../context/AppContext'
import formatCurrency from '../../../utils/formatCurrency'
type Props = {}

const Cart = (props: Props) => {
    const { cartItems } = useContext(AppContext)

    const totalPrice = cartItems.reduce((acc: number, item: typeof cartItems[0]) => {
        return item.price + acc
    }, 0)


    return (
        // ${styles.cart_active} --pra ativar o menu lateral
        <section className={`${styles.cart}`}>
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
                {totalPrice != 0 ? (
                    formatCurrency(totalPrice, 'BRL')
                ) : (
                    <span> Seu carrinho está vazio</span>
                )
                }
            </div>
        </section>
    )
}

export default Cart