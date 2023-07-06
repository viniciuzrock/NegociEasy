import React, { useContext } from 'react'
import styles from './CartField.module.css'
import CartItem from '../CartItem/CartItem'
import AppContext from '../../../context/AppContext'
import formatCurrency from '../../../utils/formatCurrency'
import SubmitButton from '../../SubmitButton/SubmitButton'
import axios from 'axios'

type Props = {}

const Cart = (props: Props) => {
    const { cartItems, isCartVisible, setCartItems } = useContext(AppContext)

    const totalPrice = cartItems.reduce((acc: number, item: typeof cartItems[0]) => {
        return item.price + acc
    }, 0)

    const email = localStorage.getItem('email')

    const handleBuy = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const data = {
            cartItems: cartItems,
            email: email
        }
        console.log(data);
        await axios.post('http://localhost:3010/api/products/completePurchase', data).then((resp) => {
            alert('Compra finalizada!')
            alert(resp.data)
        }).catch((e) => {
            console.log('[Error request]: ' + e)
        })
        console.log('Comprou');
    }

    return (
        <section className={`${styles.cart} ${isCartVisible ? styles.cart_active : ''}`}>
            <div className={styles.cart_items}>
                {
                    cartItems.map((cartItem: any) => {
                        return (
                            <CartItem
                                key={cartItem.id}
                                thumbnail={cartItem.image}
                                name={cartItem.name}
                                price={cartItem.price}
                                id={cartItem.id}
                            />
                        )
                    })
                }
            </div>
            <div className={styles.cart_resume}>
                {totalPrice !== 0 ? (
                    <div className={styles.closeCart}>
                        {formatCurrency(totalPrice, 'BRL')}
                        <SubmitButton text='Concluir Compra' custom={'buy'} onClick={handleBuy} />
                    </div>
                ) : (
                    <span> Seu carrinho está vazio</span>
                )}
            </div>
        </section>
    )
}

export default Cart