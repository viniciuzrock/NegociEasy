import React from 'react'
import styles from './Loading.module.css'
type Props = {}

const Loading = (props: Props) => {
    return (
        <div className={styles.lds_ringa}>

            <div className={styles.lds_ring}><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loading