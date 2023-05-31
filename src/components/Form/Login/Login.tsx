import React, { ChangeEvent, FormEvent, useState } from 'react'
import styles from './Login.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
type Props = {}

const Login = (props: Props) => {

    const navigate = useNavigate()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const login = async (e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            const data = {
                email: email,
                password: password
            }
            console.log(data);

            await axios.post('http://localhost:3010/api/users/login', data).then((response) => {
                console.log(response.data)
                alert('Sucesso')
                navigate('/home', {
                    state: {
                        user: response.data
                    }
                })
            }).catch((e) => {
                alert(e)
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
                <input type="submit" value='Entrar' />
            </form>
        </div>
    )
}

export default Login