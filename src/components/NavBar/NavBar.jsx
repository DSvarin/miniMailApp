import React from "react";
import styles from './NavBar.module.scss'

const NavBar = ({tag, setTag, setId}) => {

    return (
        <div className={styles.container}>
            <button
                onClick={() => {
                    setTag('inbox')
                    setId(null)
                }}
                className={`${styles.item} ${tag === 'inbox' ? styles.selected: null}`}>
                Inbox
            </button>
            <button
                onClick={() => {
                    setTag('important')
                    setId(null)
                }}
                className={`${styles.item} ${tag === 'important' ? styles.selected: null}`}>
                Important
            </button>
        </div>
    )
}

export default NavBar