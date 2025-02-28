import React, { useState } from "react";
import styles from "../Library/Library.module.css";
import ShareOption from "../Dashboard/ShareOption";
import Modal2 from "../Modal2/Modal2";

const Slide1 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      id: 1,
      img: "images/card-Img1.png",
      title: "Capturing Distributor Mind",
      author: "By Manny Gates",
      source: "Official LMS",
      desc:"Capturing distributor mind is a strategic guide designed to help businesses understand and influence distributor behavior. It covers key insights into building strong relationships, enhancing product positioning, and creating compelling value propositions. By leveraging psychological triggers and data-driven approaches, businesses can effectively engage distributors, boost sales, and establish long-term partnerships for sustainable growth."
    },
    {
      id: 2,
      img: "images/card-Img2.png",
      title: "Safety Datasheet",
      author: "By Manny Gates",
      source: "Polyglass.com",
      desc:"A Safety Datasheet (SDS) is a critical document that provides detailed information about the properties, hazards, and safe handling of chemicals and materials. It outlines important safety measures, including first-aid procedures, fire-fighting guidelines, storage conditions, and disposal methods. SDS helps businesses comply with regulatory standards, ensuring workplace safety and minimizing environmental risks. By offering clear instructions on protective equipment and emergency response, it enables workers to handle hazardous substances responsibly, reducing potential health and safety hazards. Whether in manufacturing, laboratories, or industrial settings, an SDS is essential for maintaining a safe and compliant work environment."
    },
    {
      id: 3,
      img: "images/card-Img3.png",
      title: "Product Datasheets",
      author: "By Manny Gates",
      source: "Polyglass.com",
      desc:"A Product Datasheet is an essential document that provides a comprehensive overview of a product’s specifications, features, and usage guidelines. It serves as a technical reference, offering details such as dimensions, materials, performance capabilities, and compliance with industry standards. Product datasheets help customers, engineers, and distributors make informed decisions by outlining key benefits, installation instructions, and maintenance recommendations. Whether for electronics, industrial equipment, or consumer goods, these datasheets ensure transparency and clarity, enabling efficient product evaluation and seamless integration into various applications."
    },
    {
      id: 4,
      img: "images/card-Img4.png",
      title: "PolyGlass Case Studies",
      author: "By Manny Gates",
      source: "Polyglass.com",
      desc:"PolyGlass Case Studies showcase real-world applications of PolyGlass products, highlighting their performance, durability, and innovation across various industries. These case studies provide insights into how businesses and contractors have successfully implemented PolyGlass solutions in roofing, waterproofing, and construction projects. They detail challenges faced, solutions applied, and measurable outcomes, demonstrating the effectiveness of PolyGlass materials in enhancing building longevity and efficiency. By analyzing these success stories, professionals can better understand best practices, product benefits, and how PolyGlass can be integrated into their own projects for superior results."
    },
  ];

  const openModal = (card) => {
    setSelectedCard(card);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <div>
      <div className={styles.slideMain}>
        {cards.map((card) => (
          <div className={styles.slideDiv} key={card.id}>
            <div className={styles.slideCard}>
              <img
                src={card.img}
                alt={card.title}
                onClick={() => openModal(card)}
                style={{ cursor: "pointer" }}
              />
              <div className={styles.cardDeatils}>
                <div className={styles.content}>
                  <h2>{card.title}</h2>
                  <p>{card.author}</p>
                  
                </div>
                <div className={styles.user}>
                  <img src="/Avatars-Group.png" alt="User" />
                </div>
              </div>
              <div className={styles.shareDiv}>
                <div className={styles.source}>
                  <p>Source: </p>
                  <span>{card.source}</span>
                 
                </div>
                <div className={styles.accessMain}>
                  <div className={styles.share}>
                    <ShareOption />
                  </div>
                  <div className={styles.accessDiv}>
                    <p>Access</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal2 with children approach */}
      <Modal2 isOpen={modalOpen} onClose={closeModal}>
        {selectedCard && (
          <div className={styles.modalContentInner}>
            <img className={styles.modImg} src={selectedCard.img} alt={selectedCard.title} />
            <h2>{selectedCard.title}</h2>
            <p>{selectedCard.author}</p>
            <p>
              <strong>Source:</strong> {selectedCard.source}
            </p>
            <div>
            <p>{selectedCard.desc}</p>
            </div>
          </div>
        )}
      </Modal2>
    </div>
  );
};

export default Slide1;
