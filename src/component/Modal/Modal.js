import React, { useEffect } from 'react';
import styles from '../Modal/Modal.module.css';

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Scroll disable
    } else {
      document.body.style.overflow = 'auto'; // Scroll enable
    }

    return () => {
      document.body.style.overflow = 'auto'; // Cleanup on unmount
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className={styles.closeButton}>
          <img src="svg/Cross-Icon.svg" alt="Close" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
