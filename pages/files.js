import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'
import { FileUpload } from 'primereact/fileupload';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";


function files() {
    return (
        <>
        <Head>
          <title>P Management System</title>
        </Head>
            <div className={styles.Heading}>
                <h1 >
                   Upload Files
                </h1>
                
            </div>
           
<div>
<FileUpload name="demo[]" url="./upload" multiple className={styles.filesContainer}></FileUpload>
</div>
        </>

    )
}

export default files
