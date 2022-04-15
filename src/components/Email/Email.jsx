import React from "react";

import styles from './Email.module.scss'

const Email = ({email:{id, email, body, important}, setId, setImportant}) => {
    return (
        <div className={styles['email-container']}>
            {
                important &&
                <div className={styles['important-text']}>
                    Important!
                </div>
            }
            <div className={styles.header}>
                <div>
                    From:
                    {email}
                </div>
            </div>
            <button
                onClick={() => setId(null)}
                className={styles['close-btn']} />
            <div className={styles.content}>
                {body}
            </div>
            <button
            className={styles['important-btn']}
            onClick={() => setImportant(id)}>It is{important && "n't"} important</button>
        </div>
    )
}

export default Email