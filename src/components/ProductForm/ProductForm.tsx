import React from 'react'
import styles from './ProductForm.module.css'
import SubmitButton from '../SubmitButton/SubmitButton'
import axios from 'axios'
import formatCurrency from '../../utils/formatCurrency'

type Props = {
    name: string,
    price: number,
    image: string

}

const ProductForm = ({ name, price, image }: Props) => {

    console.log(image);


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

    // Trocar inputs => transformar em label e deixar os inputs no formato hidden
    return (
        <section className={styles.card}>
            <form className={styles.form}>
                {/* <input type="image" className={styles.img} src={image} alt="" name='image' /> */}
                {/* ver como pegar imagem de formulário */}
                <input type="hidden" className={styles.txt} value={name}></input>
                <input type="hidden" className={styles.txt} value={'R$ ' + price}></input>
                <img className={styles.img} src={image.replace(/\w\.jpg/gi, "W.jpg")} alt="" />
                <div className={styles.infos}>
                    <h2 className={styles.price}>{formatCurrency(price, 'BRL')}</h2>
                    <h2 className={styles.title}>{name}</h2>
                    <div className={styles.actions}>
                        <SubmitButton text='Adicionar ao carrinho' custom='addCart' onClick={handleAddToCart} />
                        <SubmitButton text='Comprar' custom='buy' onClick={handleBuy} />
                    </div>
                </div>
            </form>
        </section>
    )
}

export default ProductForm