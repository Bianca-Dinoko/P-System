import React from 'react'
import styles from '../styles/Home.module.css'
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter, FaRegCopyright } from 'react-icons/fa';



function Footer() {
    return (
        <>
            <div className={styles.footerBox}>
                <FaLinkedin className={styles.icons} />
                <FaFacebook className={styles.icons} />
                <FaInstagram className={styles.icons} />
                <FaTwitter className={styles.icons} />
            </div>

        </>
    )
}

export default Footer