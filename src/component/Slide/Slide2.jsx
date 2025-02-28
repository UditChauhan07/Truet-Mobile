import React from 'react'
import styles from '../Library/Library.module.css'
import ShareOption from '../Dashboard/ShareOption'

const Slide2 = () => {
  return (
    <div>
      <div className={styles.slideMain}>
            <div className={styles.slideDiv}>
              <div className={styles.slideCard}>
                <img src="images/polly-glass.png" alt="" />
                <div className={styles.cardDeatils}>
                  <div className={styles.content}>
                    <h2>PolyGlass Sales Process</h2>
                    <p>By Peter Will</p>
                  </div>
                  <div className={styles.user}>
                    <img src="images/Avatars-Group2.png" alt="" />
                  </div>
                </div>
                <div className={styles.shareDiv}>
                  <div className={styles.source}>
                    <p>Source: </p>
                    <span>Salesforce</span>
                  </div>
                  <div className={styles.accessMain}>
                    <div className={styles.share}>
                    <ShareOption/>
                    </div>
                    <div className={styles.accessDiv}>
                      <p>Access</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.slideDiv}>
              <div className={styles.slideCard}>
                <img src="images/polly-glass2.png" alt="" />
                <div className={styles.cardDeatils}>
                  <div className={styles.content}>
                    <h2>Opportunity Management</h2>
                    <p>By Manny Gates</p>
                  </div>
                  <div className={styles.user}>
                    <img src="images/Avatars-Group3.png" alt="" />
                  </div>
                </div>
                <div className={styles.shareDiv}>
                  <div className={styles.source}>
                    <p>Source: </p>
                    <span>Official LMS</span>
                  </div>
                  <div className={styles.accessMain}>
                    <div className={styles.share}>
                    <ShareOption/>
                    </div>
                    <div className={styles.accessDiv}>
                      <p>Access</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.slideDiv}>
              <div className={styles.slideCard}>
                <img src="images/polly-glass3.png" alt="" />
                <div className={styles.cardDeatils}>
                  <div className={styles.content}>
                    <h2>Outreach Best Practices</h2>
                    <p>By Mark Benjamin</p>
                  </div>
                  <div className={styles.user}>
                    <img src="/Avatars-Group.png" alt="" />
                  </div>
                </div>
                <div className={styles.shareDiv}>
                  <div className={styles.source}>
                    <p>Source: </p>
                    <span>Official LMS</span>
                  </div>
                  <div className={styles.accessMain}>
                    <div className={styles.share}>
                    <ShareOption/>
                    </div>
                    <div className={styles.accessDiv}>
                      <p>Access</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.slideDiv}>
              <div className={styles.slideCard}>
                <img src="images/polly-glass4.png" alt="" />
                <div className={styles.cardDeatils}>
                  <div className={styles.content}>
                    <h2>Sales Playbook</h2>
                    <p>By Manny Gates</p>
                  </div>
                  <div className={styles.user}>
                    <img src="/Avatars-Group.png" alt="" />
                  </div>
                </div>
                <div className={styles.shareDiv}>
                  <div className={styles.source}>
                    <p>Source: </p>
                    <span>Official LMS</span>
                  </div>
                  <div className={styles.accessMain}>
                    <div className={styles.share}>
                    <ShareOption/>
                    </div>
                    <div className={styles.accessDiv}>
                      <p>Access</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Slide2
