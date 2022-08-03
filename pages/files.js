import React from 'react'
import styles from '../styles/Home.module.css'


function files() {
    return (
        <>

            <div className={styles.Heading}>
                <h1 >
                    Upload Pdf Documents
                </h1>
            </div>
            <div className={styles.filesContainer}>
                <input type="file" className={styles.input} />
            </div>

        </>

    )
}

export default files
