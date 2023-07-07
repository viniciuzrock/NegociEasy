import React, { ChangeEvent, FormEvent, useState } from 'react'
import styles from './Register.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Loading from '../../layout/Loading/Loading'
import SubmitButton from '../../SubmitButton/SubmitButton'
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi'
import Message from '../../layout/Message/Message'
type Props = {}

const Register = (props: Props) => {

    const navigate = useNavigate()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [message, setMessage] = useState('')
    const [type, setType] = useState('')

    const register = async (e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            setMessage('')
            setIsLoading(true)
            const data = {
                email: email,
                password: password
            }

            // await axios.post('http://localhost:3010/api/users/register', data).then((response) => {
            await axios.post('https://aviza.vercel.app/api/users/register', data).then((response) => {
                localStorage.setItem('email', response.data.data.email)
                console.log(response.data.data.email);
                setMessage('Carregando...')//AJUSTAR
                setType('success')
                navigate('/home', {
                    state: {
                        user: response.data
                    }
                })
            }).catch((e) => {
                setIsLoading(false)
                console.log(e.response.data.message);

                if (e.response.data.message === 'auth/weak-password') {
                    setMessage('A senha deve ter pelo menos 6 dígitos.')
                    setType('error')
                    return
                } else if (e.response.data.message === 'auth/email-already-in-use') {
                    setMessage('O e-mail informado já está em uso.')
                    setType('error')
                    return
                }
                setMessage('Estamos com problemas, tente novamente mais tarde.')
                setType('error')
                return
            })
        } catch (error) {
            console.log('[ Error Submit ]:' + error);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.container_title}>
                <span>Cadastro</span>
            </div>
            <form className={styles.form} onSubmit={register}>
                <div className={styles.input_container}>
                    <div className={styles.icon_input}>
                        <HiOutlineMail />
                    </div>
                    <input type="email" name="email" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={styles.input_container}>
                    <div className={styles.icon_input}>
                        <HiOutlineLockClosed />
                    </div>
                    <input type="password" name="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <SubmitButton text='Registrar' custom='register' isLoading={isLoading} />
            </form>
            {message && <Message type={type} message={message} />}
        </div >
    )
}

export default Register