import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

function Body() {
    return (
        <div className={styles.Container}
            style={{
                backgroundImage: "url('https://media.istockphoto.com/photos/police-lights-and-sirens-law-enforcements-picture-id627890264?b=1&k=20&m=627890264&s=170667a&w=0&h=vaSK3romzVPklAJ7JRYB2JHVZj_WBLV9l41ArsDNGqs=') ",
                width: "100%",
                height: "600px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
        >

            <h1 className={styles.h1}>
                Working to keep our
            </h1>
            <h1 className={styles.h1}>
                community safe
            </h1>
            <Link href='/files'>
                <button className={styles.headingButton}>
                    <strong>Add files</strong>
                </button>
            </Link>

        </div>
    )
}

export default Body
