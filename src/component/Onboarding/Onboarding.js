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
            <div className={styles.bodyMain}>
                <div className={styles.bodypart}>
                    <div> <img src='svg/marketing.svg' alt='' /></div>
                    <div><h2>Marketing SharePoint</h2>
                        <p>All the Polyglass Marketing Resources you will need to start</p>
                    </div>

                    <div> <img src='svg/done.svg' alt='' /></div>

                </div>
                <div className={styles.bodypart}>
                    <div> <img src='svg/global.svg' alt='' /></div>
                    <div><h2>Global Entry</h2>
                        <p>Official Trusted Traveler Program | Department of Homeland Security</p>
                    </div>

                    <div> <img src='svg/done.svg' alt='' /></div>

                </div>
                <div className={styles.bodypart}>
                    <div> <img src='svg/Polyflex.svg' alt='' /></div>
                    <div><h2>Polyflex Datasheet</h2>
                        <p >Check this to understand all about the product in one go</p>
                    </div>
                    <div> <img src='svg/start.svg' alt='' /></div>
                </div>
                <div className={styles.bodypart}>
                    <div> <img src='svg/elearning.svg' alt='' /></div>
                    <div><h2>eLearning Resources</h2>
                        <p>Complete these courses from</p>
                    </div>
                    <div> <img src='svg/start.svg' alt='' /></div>
                </div>
                <div className={styles.bodypart}>
                    <div> <img src='svg/sarc.svg' alt='' /></div>
                    <div><h2>SARC Brochure</h2>
                        <p>Go through this Brochure to complete</p>
                    </div>
                    <div> <img src='svg/start.svg' alt='' /></div>

                </div>
                <p className={styles.signP}>These are the course onboarding screens. Explore courses or <b>skip</b>skip to sign up.</p>
            </div>
            <div className={styles.skipMain}>
            <div className={styles.skipDiv}>
                <div><p>Skip Now</p></div>
            </div>
            </div>
        </div>
    )
}

export default Onboarding
