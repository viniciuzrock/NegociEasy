import React from 'react'
import styles from './ProductForm.module.css'
import SubmitButton from '../SubmitButton/SubmitButton'
import axios from 'axios'

type Props = {
    name: string,
    price: number,
    image: string

}

const ProductForm = ({ name, price, image }: Props) => {

    const handleAddToCart = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

    }

    const handleBuy = async (e: React.MouseEvent<HTMLButtonElement>) => {
        try {
            e.preventDefault()
            const data = {
                name: name,
                price: price,
                image: image
            }
            //enviar email como params routes, para envio de cada usuário (Mudar no backend)
            await axios.post('http://localhost:3010/api/products/completePurchase', data).then((resp) => {
                alert('Compra finalizada!')
                alert(resp.data)
                console.log(resp.data)
            }).catch((e) => {
                console.log('[Error request]: ' + e)
            })
            console.log('Comprou');
        } catch (error) {
            console.log('[Error form]: ' + error);

        }
    }

    return (
        <div className={styles.card}>
            <form className={styles.form}>
                <input type="image" className={styles.img} src={image} alt="" name='image' />
                <input type="name" className={styles.txt} value={name}></input>
                <input type="price" className={styles.txt} value={'R$ ' + price}></input>
                <div className={styles.actions}>
                    <SubmitButton text='Adicionar ao carrinho' custom='addCart' onClick={handleAddToCart} />
                    <SubmitButton text='Comprar' custom='buy' onClick={handleBuy} />
                </div>
            </form>
        </div>
    )
}

export default ProductForm