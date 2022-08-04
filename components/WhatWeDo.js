import React from 'react'
import Grid from '@mui/material/Grid';
import styles from '../styles/Home.module.css'


function WhatWeDo() {
    return (
        <Grid container spacing={2} id='What-we-do' className={styles.box}>
            <Grid item xs={4} >
                <h3>What we do</h3>
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
            </Grid>
            <Grid item xs={4}>
                <h3>Mission</h3>
                <p className={styles.aboutText}>
                    Our mission is to prevent and detect crime to ensure the safety and security of South Africa.
                </p>
            </Grid>
            <Grid item xs={4}>
                <h3>Vision</h3>
                <p className={styles.aboutText}>
                    A force of The Nation to make South Africa the safest place in te world.
                </p>
            </Grid>

        </Grid>
    )
}

export default WhatWeDo