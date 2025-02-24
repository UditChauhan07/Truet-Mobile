import React from 'react'
import styles from '../Modal/Modal.module.css'

const Modal = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
      <button className={styles.closeButton} onClick={onClose}>X</button>
      <h2>Modal Title</h2>
      <p>This is a sample modal with animation.</p>
    </div>
  </div>
  )
}

export default Modal
