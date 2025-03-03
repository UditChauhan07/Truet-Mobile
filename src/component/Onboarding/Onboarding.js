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
                        <img alt='svg/Logo.svg' src=''/>

                    </div>

                </div>
                <div>
                    <img src='svg/cloud.svg' alt=''/>
                </div>

            </div>
        </div>
    )
}

export default Onboarding
