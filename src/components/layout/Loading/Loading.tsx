import React from 'react'
import styles from './Loading.module.css'
import { BiLoaderAlt } from 'react-icons/bi'
type Props = {
    darkMode?: string
}

const Loading = ({ darkMode }: Props) => {
    return (
        <div className={styles.container}>
            {darkMode ?
                <BiLoaderAlt className={`${styles[darkMode!]}`} />
                :
                <BiLoaderAlt className={`${styles.loading}`} />
            }
        </div>
        // <div className={`${styles.lds_ringa} `}>

        //     <div className={`${styles.lds_ring} ${styles[darkMode]}`}><div></div><div></div><div></div><div></div></div>
        // </div>
    )
}

export default Loading