import React, { useEffect, useState } from 'react'
import styles from './Message.module.css'
type Props = {
    message: string, // optional prop with a fallback value of "Hello World" if not provided
    type: string
}

const Message = ({ message, type }: Props) => {

    const [visible, setVisible] = useState(false)
    useEffect(() => {
        if (!message) {
            setVisible(false)
            return
        }
        setVisible(true)

        const clearMessage = setTimeout(() => {
            setVisible(false);
        }, 3000)

        return () => {
            clearTimeout(clearMessage)
        }
    }, [message])


    return (
        <>
            {visible && (
                <div className={`${styles.message} ${styles[type]}`}>
                    {message}
                </div>
            )}
        </>
    )
}

export default Message