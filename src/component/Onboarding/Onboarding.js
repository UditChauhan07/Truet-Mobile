import React from 'react'
import styles from '../Onboarding/Onboarding.module.css'



const Onboarding = () => {
    return (
        <div className={styles.OnboardingMain}>
            <div className={styles.headerPart}>
                <div className={styles.OnboardingTitle}>
                    <p>Welcome to,</p>
                    <h1>New <b>SalesRep</b> Onboarding</h1>
                    <div className={styles.logo}>
                        <img src='svg/Logo.svg' alt='' />
                    </div>
                </div>
                <div>
                    <img src='images/cloudPng.png' alt='' />
                </div>
            </div>
            <div className={styles.bodypart}>
                <div> <img src='svg/marketing.scg' alt=''/></div>

            </div>

        </div>
    )
}

export default Onboarding
