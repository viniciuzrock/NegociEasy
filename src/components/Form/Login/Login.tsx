import React, { ChangeEvent, FormEvent, useState } from 'react'
import styles from './Login.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Loading from '../../layout/Loading/Loading'
import SubmitButton from '../../SubmitButton/SubmitButton'

type Props = {}

const Login = (props: Props) => {

    const navigate = useNavigate()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const login = async (e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            setIsLoading(true)
            const data = {
                email: email,
                password: password
            }
            console.log(data);

            await axios.post('http://localhost:3010/api/users/login', data).then((response) => {
                console.log(response.data)
                // alert('Sucesso')
                // navigate('/home', {
                //     state: {
                //         user: response.data
                //     }
                // })
            }).catch((e) => {
                alert(e)
                setIsLoading(false)
                console.log('[ Error request]:' + e)

            })
        } catch (error) {
            console.log('[ Error Submit ]:' + error);

        }
    }

    return (
        <div className={styles.a}>
            <form className={styles.form} onSubmit={login}>
                <div className={styles.input_container}>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" placeholder='mail' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={styles.input_container}>
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <SubmitButton text='Entrar' custom='buy' isLoading={isLoading} />
            </form>
        </div >
    )
}

export default Login