import React from 'react'
import styles from '../styles/Home.module.css'

function AboutUs() {


    return (
        <div className={styles.aboutContainer} id='About-Us'>
            <div >
                <h1 >What we do</h1>
                <p className={styles.aboutText}>
                    Whether you work  with paper documents,electronic files, or a mixture of both,
                    its vital to keep them organised and accessible.
                    That way our website helps you save time
                    looking for things, and always have the right on hand when you need it.
                </p>
                <p className={styles.aboutText}>
                    The purpose of the website is to save and store a digital copy that prevents loss or
                    damage to the hard copy document.
                </p>
            </div>

        </div>
    )
}

export default AboutUs