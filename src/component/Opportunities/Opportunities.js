import React, { useState } from 'react'
import styles from "../Library/Library.module.css"
import Modal from '../Modal/Modal'

const Opportunities = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };
    return (
        <div>
            {/* Modal Component */}
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <div className={styles.OpportunitiesDiv}>
                    <div className={styles.OppContent}>
                        <h1>Find sales opportunities.</h1>
                        <div className={styles.logoImg}>
                            <img src='images/Polyglass-Logo.png' alt='' />

                        </div>
                        <h2>Our product lines</h2>
                        <ul>
                            <li>Polimer Bitumen Membranes</li>
                            <li>Liquid waterproofing and accessories</li>
                            <li>Acustic insulation</li>
                            <li>Synthetic membranes</li>
                            <li>Thermal insulation</li>
                        </ul>
                    </div>
                </div>
            </Modal>
            <div className={styles.security}>
                <div className={styles.securityDetails}>
                    <img src="/thumb-icon.svg" alt="" />
                    <h2>Apply for more sales opportunities in your region.</h2>
                    <p>Discover products to boost your revenue.</p>
                </div>
                <div className={styles.cards} onClick={handleOpenModal}>
                    <p>Find sales opportunities.</p>
                </div>
            </div>
        </div>
    )
}

export default Opportunities
