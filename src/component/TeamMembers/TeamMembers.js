import React,{useState} from 'react'
import styles from '../Library/Library.module.css'
import { useNavigate } from "react-router-dom";

const TeamMembers = () => {
      const [isOpen2, setIsOpen2] = useState(false);
      const [isOpen3, setIsOpen3] = useState(false);
      const [isOpen4, setIsOpen4] = useState(false);
    const navigate = useNavigate();
      const handleChatNavigation = () => {
        navigate("/chat");
      };
      const handleContactList = () => {
        navigate("/Contactlist");
      };
  return (
    <div>
      <div className={styles.teamDiv}>
            <div className={styles.teamcontent}>
              <div className={styles.teamtittle}>
                <h2>Team members (Ask a Question)</h2>
              </div>
              <div className={styles.contactList} onClick={handleContactList}>
                <img src="/add-icon.svg" />        
              </div>
            </div>
            <div className={styles.member}>
              <div className={styles.memberDetails} onClick={handleChatNavigation}>
                <img src="/Profile1.png" alt="" />
                <div className={styles.name}>
                  <p>Adela Parkson</p>
                  <text>Creative Director</text>
                </div>
              </div>
              <div className={styles.menuContainer}>
                {/* Clickable Div with Image */}
                <div className={styles.option} onClick={() => setIsOpen2(!isOpen2)}>
                  <img src="/option.svg" alt="Menu" />
                </div>

                {/* Dropdown Menu */}
                {isOpen2 && (
                  <div className={styles.menuDropdown}>
                    <p>Remove</p>
                    <p>Chat</p>
                  </div>
                )}
              </div>

            </div>
            <div className={styles.member}>
              <div className={styles.memberDetails} >
                <img src="/Profile2.png" alt="" />
                <div className={styles.name}>
                  <p>Christian Mad</p>
                  <text>Product Designer</text>
                </div>
              </div>
              <div className={styles.menuContainer}>
                {/* Clickable Div with Image */}
                <div className={styles.option} onClick={() => setIsOpen3(!isOpen3)}>
                  <img src="/option.svg" alt="Menu" />
                </div>

                {/* Dropdown Menu */}
                {isOpen3 && (
                  <div className={styles.menuDropdown}>
                    <p>Remove</p>
                    <p>Chat</p>
                  </div>
                )}
              </div>
            </div>
            <div className={styles.member}>
              <div className={styles.memberDetails} >
                <img src="/Profile3.png" alt="" />
                <div className={styles.name}>
                  <p>Jason Statham</p>
                  <text>Junior Graphic Designer</text>
                </div>
              </div>
              <div className={styles.menuContainer}>
                {/* Clickable Div with Image */}
                <div className={styles.option} onClick={() => setIsOpen4(!isOpen4)}>
                  <img src="/option.svg" alt="Menu" />
                </div>

                {/* Dropdown Menu */}
                {isOpen4 && (
                  <div className={styles.menuDropdown}>
                    <p>Remove</p>
                    <p>Chat</p>
                  </div>
                )}
              </div>
            </div>
          </div>
    </div>
  )
}

export default TeamMembers
