import React from "react";
import styles from './SearchPanel.module.scss'

const SearchPanel = ({value, setValue}) => {
    return (
        <div className={styles['input-container']}>
            <input
                value={value}
                onChange={(event) => setValue(event.target.value)}
                placeholder="Search email..."/>
        </div>
    )
}

export default SearchPanel