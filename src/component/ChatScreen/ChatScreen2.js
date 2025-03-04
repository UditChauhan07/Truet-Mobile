import React, { useState } from 'react';
import styles from "../ChatScreen/ChatScreen.module.css";
import { useNavigate } from "react-router-dom";

const ChatScreen2 = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { text: "Hey! 👋 Need help?", sender: true },
    { text: "Hi! Looking for a tool to manage my team.", sender: false },
    { text: "Gotcha! How many people?", sender: true },
    { text: "20. We struggle with task tracking.", sender: false },
    { text: "Our tool has tracking, reminders & team chat. Free trial?", sender: true },
    { text: "Yes! Is it free?", sender: false },
    { text: "Yep! 14 days, no card needed. Want the link?", sender: true },
    { text: "Sure!", sender: false },
    { text: "Here it is: [Link] 🚀 Let me know if you need help!", sender: true },
    { text: "Signed up!", sender: false },
    { text: "Awesome! 🎉 Welcome aboard!", sender: true },






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
          <img src="svg/Christian.svg" alt="Profile" />
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
                  <img src="svg/raceiver2.svg" alt="Receiver" />
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

export default ChatScreen2
