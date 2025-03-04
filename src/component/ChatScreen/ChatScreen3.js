import React, { useState } from 'react';
import styles from "../ChatScreen/ChatScreen.module.css";
import { useNavigate } from "react-router-dom";

const ChatScreen3 = () => {
     const navigate = useNavigate();
      const [messages, setMessages] = useState([
        { text: "Hi! 👋 Looking for something?", sender: true },
        { text: "Yeah, do you have a good CRM tool?", sender: false },
        { text: "Yes! What features do you need?", sender: true },
        { text: "Lead tracking & automation mainly.", sender: false },
        { text: "Perfect! Our CRM does that + more. Want a demo?", sender: true },
        { text: "How much does it cost?", sender: false },
        { text: "Starts at $XX/month. Free trial available!", sender: true },
        { text: "Nice! Send me the link.", sender: false },
        { text: "Here you go: [Link] 🚀 Let me know if you need help!", sender: true },
        { text: "Got it! Thanks.", sender: false },
        { text: "Anytime! Enjoy your trial. 😊!", sender: true },


    
    
    
    
      ]);
      const [inputMessage, setInputMessage] = useState("");
    
      const sendMessage = () => {
        if (inputMessage.trim() === "") return;
    
        // Add the new message to the chat
        setMessages([...messages, { text: inputMessage, sender: true }]);
    
        // Clear input field
        setInputMessage("");
      };
  return (
    <div className={styles.ChatMian}>
      <div className={styles.headerbar}>
        <div className={styles.backButton} onClick={() => navigate('/sales')}>
          <img src="svg/arrowLeft.svg" alt="Back" />
        </div>
        <div className={styles.Profile}>
          <img src="svg/jason.svg" alt="Profile" />
        </div>
        <div className={styles.ProfileName}>
          <p>Jason Statham</p>
        </div>
        <div className={styles.calldiv}>
          <div>
            {/* <img src='svg/video-call.svg' /> */}
          </div>
          <div>
            <img src='svg/voice-call.svg' />
          </div>
        </div>

      </div>

      <div className={styles.chatContainer}>
        <div className={styles.timestamp}>09:41 AM</div>

        {/* Dynamically Render Messages */}
        {messages.map((message, index) => (
          <div key={index} className={`${styles.message} ${message.sender ? styles.sender : styles.receiver}`}>
            {message.sender ? (
              <>
                <div className={styles.bubble}>{message.text}</div>
                <span className={styles.profilePic}>
                  <img src="images/senderPerson.png" alt="Sender" />
                </span>
              </>
            ) : (
              <>
                <span className={styles.profilePic}>
                  <img src="svg/raceiver3.svg" alt="Receiver" />
                </span>
                <div className={styles.bubble}>{message.text}</div>
              </>
            )}
          </div>
        ))}

        {/* Message Input */}
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Type your message..."
            className={styles.input}
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />

          {/* Conditionally Show Send Button */}
          {inputMessage.trim() !== "" && (
            <button onClick={sendMessage} className={styles.sendButton}>Send</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ChatScreen3
