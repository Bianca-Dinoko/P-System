import React from 'react'
import styles from '../styles/Home.module.css'
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'; 



function Footer() {
    return (
        <>
            <div className={styles.footerBox}>
                <a className={styles.a}
                href=''>
                <FaLinkedin className={styles.icons} />
                </a>
                <a className={styles.a}
                href='https://m.facebook.com/SAPoliceService/photos/a.244078998952383/1425245584169046/?type=3#_=_' target="_blank" rel="noreferrer" >
                 <FaFacebook className={styles.icons} />
                </a>
                <a className={styles.a}
                href=''>
                 <FaInstagram className={styles.icons} />
                </a>
                <a className={styles.a}
                href='https://twitter.com/SAPoliceService?t=L4fRKHGoK6K7K7QBOkU3SA&s=09'target="_blank" rel="noreferrer" >
               <FaTwitter className={styles.icons} />
                </a>
                <a className={styles.a}
                href=' https://wa.me/0780221943' target="_blank" rel="noreferrer" >
                 <FaWhatsapp className={styles.icons} />
                </a>
                
            </div>

        </>
    )
}

export default Footer