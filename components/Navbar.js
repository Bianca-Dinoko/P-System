import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

function Navbar() {
    return (

        <nav>
            <div className="nav-wrapper  " id={styles.nav}>
                <img src="..//images/LogoImage.jpg" alt="Logo" height="65vw" />
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link href="#Home">
                            <a >Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#What-we-do">
                            <a >What we do</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#Contact-Us">
                            <a >Contact Us</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.saps.gov.za/careers/careers.php">
                            <a >Careers</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar