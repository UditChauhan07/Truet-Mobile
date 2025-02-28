import React, { useState } from "react";
import styles from "../Library/Library.module.css";
import ShareOption from "../Dashboard/ShareOption";
import Modal2 from "../Modal2/Modal2";

const Slide2 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      id: 1,
      img: "images/polly-glass.png",
      title: "PolyGlass Sales Process",
      author: "By Peter Will",
      source: "Salesforce",
      desc:"The PolyGlass Sales Process is a structured approach to selling PolyGlass products efficiently. It involves identifying customer needs, presenting suitable solutions, negotiating pricing, confirming orders, and providing after-sales support. This process ensures smooth transactions, enhances customer satisfaction, and builds long-term business relationships for sustained growth."
    },
    {
      id: 2,
      img: "images/polly-glass2.png",
      title: "Opportunity Management",
      author: "By Manny Gates",
      source: "Official LMS",
      desc:"Opportunity Management is the process of identifying, tracking, and managing potential sales opportunities from initial contact to deal closure. It involves analyzing customer needs, nurturing leads, prioritizing prospects, and implementing strategic actions to maximize conversion rates. Effective opportunity management helps businesses optimize sales performance, improve forecasting, and build long-term customer relationships."
    },
    {
      id: 3,
      img: "images/polly-glass3.png",
      title: "Outreach Best Practices",
      author: "By Mark Benjamin",
      source: "Official LMS",
      desc:"Successful outreach requires a strategic and thoughtful approach to engage potential customers effectively. Personalized communication is essential, ensuring that messages resonate with the recipient’s needs and interests. Using multiple channels, such as emails, calls, and social media, helps maximize reach and engagement. Clear and concise messaging ensures that prospects quickly understand the value being offered. Timely follow-ups are crucial to maintaining interest and keeping the conversation moving forward. Providing valuable insights or solutions rather than just making a sales pitch builds trust and credibility. Lastly, tracking and analyzing outreach efforts allow businesses to refine their strategies and improve overall effectiveness."
    },
    {
      id: 4,
      img: "images/polly-glass4.png",
      title: "Sales Playbook",
      author: "By Manny Gates",
      source: "Official LMS",
      desc:"A Sales Playbook is a comprehensive guide that outlines the strategies, processes, and best practices for a sales team to follow. It provides a structured approach to prospecting, engaging, and closing deals efficiently. The playbook includes key sales techniques, messaging guidelines, objection-handling strategies, and step-by-step workflows to ensure consistency and success. It also covers customer personas, competitive positioning, and performance metrics to help sales representatives navigate different scenarios effectively. By using a well-structured sales playbook, businesses can improve sales efficiency, align teams with organizational goals, and enhance customer interactions for long-term success."
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

      {/* Modal2 Implementation */}
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
            <div className={styles.accessDivMod}>
              <p>Access</p>
            </div>
          </div>
        )}
      </Modal2>
    </div>
  );
};

export default Slide2;
