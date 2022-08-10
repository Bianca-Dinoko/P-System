import React from 'react'
import styles from '../styles/Home.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react'
import axios from 'axios'

function Form() {


 

    return (
        <div className={styles.footer} id='Contact-Us' >
            <h3 className={styles.H1}>GET IN TOUCH</h3>
            <form>

                <div>
                    <TextField id="standard-basic" label="Your Name" variant="standard"  required className={styles.input}

                    />
                </div>
                <div>
                    <TextField id="standard-basic" label="E-mail" variant="standard" className={styles.input} required />
                </div>
                <div>
                    <TextField id="standard-basic" label="Phone Number" variant="standard" className={styles.input} />
                </div>

                <div>
                    <TextField
                        style={{ width: "400px", marginTop: "10px", marginBottom: "10px" }}
                        type="text"
                        label="How can we help you?"
                        variant="outlined"
                        multiline
                        rows={10}
                    />
                </div>
                <div>
                    <Button variant="contained" >Submit</Button>
                </div>
            </form>

        </div >
    )
}

export default Form