import React, { useState } from 'react'
import styles from '../ContactList/ContactList.module.css'
import { useNavigate, } from "react-router-dom";


const Contactlist = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const contacts = [
        {
            name: "Jane Cooper",
            phone: "(270) 555-0117",
            image: "images/contactEllipse.png",
        },
        {
            name: "Devon Lane",
            phone: "(308) 555-0121",
            image: "images/contactEllipse2.png",
        },
        {
            name: "Darrell Steward",
            phone: "(684) 555-0102",
            image: "images/contactEllipse3.png",
        },
        {
            name: "Jane Cooper",
            phone: "(270) 555-0117",
            image: "images/contactEllipse.png",
        },
        {
            name: "Devon Lane",
            phone: "(308) 555-0121",
            image: "images/contactEllipse2.png",
        },
        {
            name: "Darrell Steward",
            phone: "(684) 555-0102",
            image: "images/contactEllipse3.png",
        },
        {
            name: "Jane Cooper",
            phone: "(270) 555-0117",
            image: "images/contactEllipse.png",
        },
        {
            name: "Devon Lane",
            phone: "(308) 555-0121",
            image: "images/contactEllipse2.png",
        },
        {
            name: "Darrell Steward",
            phone: "(684) 555-0102",
            image: "images/contactEllipse3.png",
        },
        {
            name: "Jane Cooper",
            phone: "(270) 555-0117",
            image: "images/contactEllipse.png",
        },
        {
            name: "Devon Lane",
            phone: "(308) 555-0121",
            image: "images/contactEllipse2.png",
        },
        {
            name: "Darrell Steward",
            phone: "(684) 555-0102",
            image: "images/contactEllipse3.png",
        },
    ];
    // Filter contacts based on search query
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.phone.includes(searchQuery)
    );
    return (
        <div className={styles.Contactlist}>
            <div className={styles.ContactlistBody}>
                <div className={styles.navPart}>
                    <div className={styles.ContactHeader}>
                        <div onClick={() => navigate('/sales')}>
                            <img src='svg/arrowLeftBlack.svg' alt="Back" />
                        </div>
                        <div><h2>My Contacts</h2></div>
                    </div>
                    <div className={styles.searchbar}>
                        {/* Search Input */}
                        <input
                            type="text"
                            placeholder="Search contacts..."
                            className={styles.searchInput}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
                <div className={styles.Contactuser}>
                    <div className={styles.container}>
                        {filteredContacts.length > 0 ? (
                            filteredContacts.map((contact, index) => (
                                <div key={index} className={styles.contactItem}>
                                    <img src={contact.image} alt={contact.name} className={styles.avatar} />
                                    <div className={styles.info}>
                                        <p className={styles.name}>{contact.name}</p>
                                        <p className={styles.phone}>{contact.phone}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className={styles.noData}>No contacts found</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactlist
