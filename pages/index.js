
import Head from 'next/head'
import AboutUs from '../components/AboutUs';
import Body from '../components/Body';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import Form from '../components/Form';
import Navbar from '../components/Navbar';
import WhatWeDo from '../components/WhatWeDo';
import styles from '../styles/Home.module.css'


export default function Home() {

  return (
    <>
      <div className={styles.bodyContainer}
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhZGllbnQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80') ",
          width: "100%",
          height: "fit-content",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <Head>
          <title>P Management System</title>
        </Head>
        <Navbar />
        <Body />
        <WhatWeDo />
        <Form />
        <Footer />
      </div>

    </>
  )
}
