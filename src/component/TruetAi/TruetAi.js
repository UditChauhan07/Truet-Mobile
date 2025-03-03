import React from 'react'
import styles from '../TruetAi/TruetAi.module.css'
import { useNavigate, } from "react-router-dom";


const TruetAi = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className={styles.headerbar}>
                <div className={styles.backButton} onClick={() => navigate('/home')}>
                    <img src='svg/arrowLeft.svg' alt='' />
                </div>
                <div className={styles.Profile}>
                    <img src='/Profile1.png' alt=''/>
                </div>
                <div className={styles.ProfileName}>
                    <p>Truiet Ai</p>
                </div>
            </div>

            <div className={styles.logo}>

                <img src="svg/Truet-Icon.svg" alt="" />
                <p>Get quick answers to any questions from the <a href="">Organization Library</a></p>

            </div>

            <div className={styles.radiationDiv}>
                <img src="images/radiation-Img.png" alt="" />
            </div>
            <div className={styles.inputAi}>
                <div className={styles.inputDiv}>
                    <input type='text' placeholder='Type here or Click MIC to Talk' />
                </div>
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
