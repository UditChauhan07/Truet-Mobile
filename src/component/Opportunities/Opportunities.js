import React, { useState } from 'react'
import styles from "../Library/Library.module.css"
import Modal from '../Modal/Modal'
import ApportunitySearch from '../Navbar/ApportunitySearch';

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
                        <ApportunitySearch />

                        {/* <div className={styles.logoImg}>
                            <img src='images/Polyglass-Logo.png' alt='' />

                        </div> */}
                        <h2>Our product lines</h2>
                        {/* <ul>
                            <li>Polimer Bitumen Membranes</li>
                            <li>Liquid waterproofing and accessories</li>
                            <li>Acustic insulation</li>
                            <li>Synthetic membranes</li>
                            <li>Thermal insulation</li>
                        </ul> */}
                        <div className={styles.LisDataMain} >
                            <div className={styles.ListData} >
                                <h4>Polimer Bitumen Membranes</h4>
                                <p>The range is divided into traditional elastomeric (SBS), plastomeric (APP) and elastomeric-plastomeric waterproofing membranes, enhanced by additional barriers against vapour, root puncture, radon gas, protective mineral coating and metal foil.</p>
                            </div>
                            <div className={styles.ListData} >
                                <h4>Liquid waterproofing and accessories</h4>
                                <p>An extensive range of special products, such as glues, paintings, primers, liquid membranes, breathable and protection systems, for a more effective use of Polyglass waterproofing systems.</p>
                            </div>
                            <div className={styles.ListData} >
                                <h4>Acustic insulation</h4>
                                <p>Polyglass has developed a modular system of sound insulation products to address the problem of footfall noise – the SONIC line — designed for the simple and reliable installation of floating screeds and flooring so that they are perfectly isolated from the substrate.</p>
                            </div>
                            <div className={styles.ListData} >
                                <h4>Synthetic membranes</h4>
                                <p>Mapeplan production is the line of synthetic coverings for waterproofing which, thanks to an exclusive "multi-extrusion coating" technology, is able to provide PVC-P and FPO/TPO surfaces guaranteed to last long and have great performances, ideal for both new constructions and renovations.</p>
                            </div>
                            <div className={styles.ListData} >
                                <h4>Thermal insulation</h4>
                                <p>The range of bare thermal insulation boards and rolls satisfies all the thermal insulation needs of flat roof, offering products to be applied under the insulating sheath or synthetic membranes.</p>
                            </div>
                        </div>

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
