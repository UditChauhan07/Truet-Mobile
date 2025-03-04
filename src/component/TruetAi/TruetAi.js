import React from 'react'
import styles from '../TruetAi/TruetAi.module.css'
import { useNavigate, } from "react-router-dom";
import ContactSearch from '../Navbar/ContactSearch';


const TruetAi = () => {
    const navigate = useNavigate();
    
    return (
        <div>
           <div className={styles.headerbar}>
      <div className={styles.backButton} onClick={() => navigate(-1)}>
        <img src="svg/arrowLeft.svg" alt="Back" />
      </div>
    </div>
            <div className={styles.chatBody}>
                <div className={styles.logo}>

                    <img src="svg/Truet-Icon.svg" alt="" />
                    <p>Get quick answers to any questions from the <a href="">Organization Library</a></p>

                </div>

                <div className={styles.radiationDiv}>
                    <img src="images/radiation-Img.png" alt="" />
                </div>
            </div>
            <div className={styles.inputAi}>

                <ContactSearch />
                <div className={styles.container}>
                    <div className={styles.bubble}>
                        <div className={styles.micIcon}><img src='svg/mic-icon.svg' /></div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default TruetAi
