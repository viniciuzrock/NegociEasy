import React from 'react'
import styles from './Loading.module.css'
type Props = {}

const Loading = (props: Props) => {
    return (
        <div className={styles.lds_ring}>dddddddddd<div></div><div></div><div></div><div></div></div>
        // <div className={styles.loader_container}>
        //     Loading
        // </div>
    )
}

export default Loading