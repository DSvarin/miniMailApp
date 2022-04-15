import React from "react";
import ReactMarkdown from "react-markdown";
import styles from './EmailList.module.scss'

const EmailList = ({ emails, setId, value, n }) => {

    const cutText = (text, n) => {
        const array = text.split(' ')
        if(value) {
            const matches = [];
            array.forEach((item, index) => {
                if (item.match(value)) {
                    matches.push(index)
                }
            })
            let [start] = matches
            if (array.length - start < n) start = array.length-n
            const newArr = array.slice(start, start+9)
            if(start !== 0) newArr.unshift('...')
            if(array.length > start + n) newArr.push('...')
            return newArr.join(' ')
        }
        return [...array.slice(0, n), '...'].join(' ')
    }

    return (
        <ul>
            {emails.map(({id, important, email, body}) => {
               return (
                <li key={id} onClick={() => setId(id)}>
                    <span className={styles.email}>
                        {email}
                    </span>
                    {
                        important && <span className={styles.important}>Important!</span>
                    }
                    <ReactMarkdown className={styles.text}>
                        {cutText(body, 9)}
                    </ReactMarkdown>
                </li>
               )
            })}
        </ul>
    )
}

export default EmailList