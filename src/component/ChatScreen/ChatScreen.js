import React, { useState } from 'react';
import styles from "../ChatScreen/ChatScreen.module.css";
import { useNavigate } from "react-router-dom";

const ChatScreen = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { text: "Hi! Looking for a financial tool?", sender: true },
    { text: "Yes, need help tracking expenses", sender: false },
    { text: "ProfitXpert automates that! Plus, real-time reports. Want a quick demo?", sender: true },
    { text: "Sounds good! What’s the cost?", sender: false },
    { text: " Starts at $29/month after a 14-day free trial. Shall I set up your demo?", sender: true },
    { text: "Yes, please!", sender: false },
    { text: "Yeah, It's really good!", sender: true },
    { text: "Done! Check your email for details. Excited to help you! 🚀", sender: false },
    { text: "Thank you", sender: true },




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
          <img src="svg/Adelasvg.svg" alt="Profile" />
        </div>
        <div className={styles.ProfileName}>
          <p>Adela Parkson</p>
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
                  <img src="svg/receiver.svg" alt="Receiver" />
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
  );
};

export default ChatScreen;
