import React from "react";
import styles from "./Reader.module.css";

const Modal = ({ title, content, onClose, onFeedback }) => {
  // If content is a string with newlines, split it into an array of paragraphs
  const paragraphs =
    typeof content === "string" ? content.split("\n") : content;
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>{title}</h2>

        {/* Map through the paragraphs and display each one */}
        {paragraphs.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
        <div className={styles.modalButtons}>
          <button onClick={onFeedback} className={styles.feedbackButton}>
            Feedback
          </button>
          <button onClick={onClose} className={styles.closeButton}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
