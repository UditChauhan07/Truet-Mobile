import React from 'react'
import styles from "../ChatScreen/ChatScreen.module.css"
import { useNavigate } from "react-router-dom";

const ChatScreen = () => {
     const navigate = useNavigate();
    
      const handlebackChat = () => {
        navigate("/sales");
      };
  return (
    <div className={styles.ChatMian}>
        <div className={styles.backPage} onClick={handlebackChat}><img src='svg/Cross-Icon.svg'/></div>
      <div className={styles.chatContainer}>
      <div className={styles.timestamp}>09:41 AM</div>
      
      <div className={`${styles.message} ${styles.sender}`}>
        <div className={styles.bubble}>Hi, Mandy</div>
      <span className={styles.profilePic}><img src='images/senderPerson.png' alt=''/></span>

      </div>

      <div className={`${styles.message} ${styles.sender}`}>
        <div className={styles.bubble}>I've tried the app</div>
      <span className={styles.profilePic}><img src='images/senderPerson.png' alt=''/></span>

      </div>

      <div className={`${styles.message} ${styles.receiver}`}>
      <span className={styles.profilePic}><img src='images/ChatPerson.png' alt=''/></span>
        <div className={styles.bubble}>Really?</div>
      </div>

      <div className={`${styles.message} ${styles.sender}`}>
      <div className={styles.bubble}>Yeah, It's really good!</div>
      <span className={styles.profilePic}><img src='images/senderPerson.png' alt=''/></span>

      </div>

      <div className={styles.typingIndicator}>
      <span className={styles.profilePic}><img src='images/ChatPerson.png' alt=''/></span>
        Typing...
      </div>

      <input type="text" placeholder="Type your message" className={styles.input} />
    </div>
    </div>
  )
}

export default ChatScreen

