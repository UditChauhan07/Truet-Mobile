import React from 'react';
import styles from '../Onboarding/Onboarding.module.css';

const onboardingItems = [
    { img: 'svg/marketing.svg', title: 'Marketing SharePoint', desc: 'All the Polyglass Marketing Resources you will need to start' },
    { img: 'svg/global.svg', title: 'Global Entry', desc: 'Official Trusted Traveler Program | Department of Homeland Security' },
    { img: 'svg/Polyflex.svg', title: 'Polyflex Datasheet', desc: 'Check this to understand all about the product in one go' },
    { img: 'svg/elearning.svg', title: 'eLearning Resources', desc: 'Complete these courses from' },
    { img: 'svg/sarc.svg', title: 'SARC Brochure', desc: 'Go through this Brochure to complete' }
];

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
                {onboardingItems.map((item, index) => (
                    <div key={index} className={styles.bodypart}>
                        <div className={styles.iconLogo}><img src={item.img} alt='' /></div>
                        <div>
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                        </div>
                        <div><img src='svg/start.svg' alt='' /></div>
                    </div>
                ))}
                <p className={styles.signP}>
                    These are the course onboarding screens. Explore courses or <b>skip</b> to sign up.
                </p>
            </div>

            <div className={styles.skipMain}>
                <div className={styles.skipDiv}>
                    <div><p>Skip Now</p></div>
                </div>
            </div>
        </div>
    );
};

export default Onboarding;
