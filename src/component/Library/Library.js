import React, { useState,} from "react";
import Navbar from "../Navbar";
import styles from "../Library/Library.module.css";
import Footer from "../Footer/index";
import { useNavigate } from "react-router-dom";
import QuickBytes from "../QuickBytes/QuickBytes";
import Slide1 from "../Slide/Slide1";
import Slide2 from "../Slide/Slide2"



const Library = () => {
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const navigate = useNavigate();
  const handleChatNavigation = () => {
    navigate("/chat");
  };

 
  return (
    <selection>
      <Navbar></Navbar>
      <div className={styles.LibraryMain}>

        <QuickBytes />

        <div className={styles.KnowledgeDiv}>
          <div className={styles.KnowledgeTittle}>
            <h2>The Knowledge Matrix</h2>
          </div>
          <Slide1/>
          <Slide2/>
        </div>
        <div className={styles.resourcesMain}>
          <div className={styles.resourcesTittle}>
            <h2>Other Resources</h2>
          </div>
          <div className={styles.teamDiv}>
            <div className={styles.teamcontent}>
              <div className={styles.teamtittle}>
                <h2>Team members (Ask a Question)</h2>
              </div>
              <div > 
                <img src="/add-icon.svg"/>
                {/* <ShareOption/> */}
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
              <div className={styles.memberDetails} onClick={handleChatNavigation}>
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
              <div className={styles.memberDetails} onClick={handleChatNavigation}>
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
          <div className={styles.business}>
            <div className={styles.header}>
              <div>
                <img src="/fire-icon.svg" alt="" />
              </div>
              <div className={styles.resourcesDatails}>
                <p>Sales opportunity</p>
                <b>Start selling Polypoin OPDS</b>
              </div>
            </div>
            <div className={styles.centretitle}>
              <h2>Start your onboarding process to be eligible and considered for selling</h2>
            </div>
            <div className={styles.footer}>
              <div className={styles.bottom}>
                <div className={styles.time}>
                  <img src="/timer.svg" alt="" />
                  <span>85 min</span>
                </div>
                <div className={styles.video}>
                  <img src="/slow_motion_video.svg" alt="" />
                  <span>Video format</span>
                </div>
              </div>
              <div className={styles.startdiv}>
                <div>
                  <img src="/Avatars-Group.png" alt="" />
                </div>
                <div>
                  <div className={styles.started}>
                    <p>Get Started</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.security}>
            <div className={styles.securityDetails}>
              <img src="/thumb-icon.svg" alt="" />
              <h2>Apply for more sales opportunities in your region.</h2>
              <p>Discover products to boost your revenue.</p>
            </div>
            <div className={styles.cards}>
              <p>Find sales opportunities.</p>
            </div>
          </div>

        </div>
      </div>
      <Footer></Footer>
    </selection>
  );
};

export default Library;
