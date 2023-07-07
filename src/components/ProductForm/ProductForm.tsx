import React, { useState, useContext } from 'react'
import styles from './ProductForm.module.css'
import SubmitButton from '../SubmitButton/SubmitButton'
import axios from 'axios'
import formatCurrency from '../../utils/formatCurrency'
import AppContext from '../../context/AppContext'

type Props = {
    name: string,
    price: number,
    image: string
    id: any
}

const ProductForm = ({ name, price, image, id }: Props) => {
    const [isAddToCartVisible, setAddToCartVisible] = useState(false)
    const { cartItems, setCartItems } = useContext(AppContext)

    const handleAddToCart = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const data = {
            name: name,
            price: price,
            image: image,
            id: id
        }
        // ... => remove array's items for other array
        setCartItems((prevCartItems: any) => [...prevCartItems, data])
    }

    const handleBuy = async (e: React.MouseEvent<HTMLButtonElement>) => {
        try {
            e.preventDefault()
            const data = {
                name: name,
                price: price,
                image: image.replace(/\w\.jpg/gi, "W.jpg")
            }
            console.log(data);

            // enviar email como params routes, para envio de cada usuário(Mudar no backend)
            // await axios.post('http://localhost:3010/api/products/completePurchase', data).then((resp) => {
            await axios.post('https://aviza.vercel.app/api/products/completePurchase', data).then((resp) => {
                alert('Compra finalizada!')
                alert(resp.data)
            }).catch((e) => {
                console.log('[Error request]: ' + e)
            })
            console.log('Comprou');
        } catch (error) {
            console.log('[Error form]: ' + error);
        }
    }

    const handleMouseEnter = () => {
        setAddToCartVisible(true)
    }

    const handleMouseLeave = () => {
        setAddToCartVisible(false)
    }

    return (
        <section className={styles.card} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <form className={styles.form}>
                <input type="hidden" className={styles.txt} value={name}></input>
                <input type="hidden" className={styles.txt} value={'R$ ' + price}></input>
                <img className={styles.img} src={image.replace(/\w\.jpg/gi, "W.jpg")} alt="" />
                <div className={styles.infos}>
                    <h2 className={styles.price}>{formatCurrency(price, 'BRL')}</h2>
                    <h2 className={styles.title} id='title'>{name}</h2>
                    {isAddToCartVisible && (
                        <SubmitButton text='Adicionar ao carrinho' custom='addToCartBtn' onClick={handleAddToCart} />
                    )}
                    <div className={styles.actions}>
                        {/* <SubmitButton text='Comprar' custom='buy' onClick={handleBuy} /> */}
                    </div>
                </div>
            </form>
        </section>
    )
}

export default ProductForm