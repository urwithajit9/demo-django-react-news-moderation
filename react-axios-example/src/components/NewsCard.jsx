import styles from "./NewsCard.module.css";
import { toTitleCase, calculateDaysFromDate } from "../utils.js";
import FeedbackPanel from "./FeedbackPanel.jsx";
import Feedback from "./Feedback.jsx";
import { useState, useEffect } from "react";
import { submitFeedback } from "../api"; // Import the submitFeedback function
import Reader from "./Reader.jsx";

export default function NewsCard(props) {
  const [showFeedbackPopup, setShowFeedbackPopup] = useState(false);
  const [cardstatus, setCardStatus] = useState("");
  const [isDisabled, setIsDisabled] = useState(false); // Tracks whether buttons should be disabled
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [isReaderOpen, setIsReaderOpen] = useState(false);

  // to disable NewsCard hover one popup is activate

  useEffect(() => {
    if (isPopupOpen) {
      document.body.classList.add("popup-active");
    } else {
      document.body.classList.remove("popup-active");
    }
  }, [isPopupOpen]);

  // Function to open the modal
  const openReader = () => {
    setIsReaderOpen(true);
  };

  // Function to close the modal
  const closeReader = () => {
    setIsReaderOpen(false);
  };

  // Function to handle feedback button click
  const handleFeedback = () => {
    // Example feedback handler
    // alert("Feedback form will be opened here.");
    // You can open a feedback form or trigger any action
    setShowFeedbackPopup(true);
  };

  // Handler functions
  const handleApprove = async () => {
    try {
      await submitFeedback(
        props.title,
        props.published_date,
        props.source_name,
        "Approved"
      );
      setCardStatus("approved");
      setIsDisabled(true);
    } catch (error) {
      // Optionally handle the error here
      console.error("Error approving:", error);
    }
  };

  const handleReport = () => {
    setShowFeedbackPopup(true);
    setIsPopupOpen(false);
  };

  const closeFeedbackPopup = () => {
    setShowFeedbackPopup(false);
    setIsDisabled(true);
  };

  // const handleReport = async () => {
  //   try {
  //     await submitFeedback(
  //       props.title,
  //       props.published_date,
  //       props.source_name,
  //       "Reported"
  //     );
  //     setCardStatus("reported");
  //     setIsDisabled(true);
  //   } catch (error) {
  //     // Optionally handle the error here
  //     console.error("Error reporting:", error);
  //   }
  // };

  return (
    <div className={`${styles.newscard} ${styles[cardstatus]}`}>
      <div className={styles.newstite}>
        <a href={props.news_url} target="_blank" rel="noreferrer">
          <p>{props.title}</p>
        </a>
        <button onClick={openReader} className={styles.readButton}>
          Read
        </button>
      </div>

      <div className={styles.duration}>
        <p className={styles.newsdate}>{props.published_date}</p>
        <p className={styles.numberofdays}>
          {calculateDaysFromDate(props.published_date)} Days old.
        </p>
      </div>

      <div className={styles.sourceinfo}>
        <p>Source: </p>
        <p className={styles.sourcename}>{toTitleCase(props.source_name)}</p>
      </div>

      <FeedbackPanel
        onApprove={handleApprove}
        onReport={handleReport}
        isDisabled={isDisabled}
      />
      {showFeedbackPopup && (
        <Feedback
          title={props.title}
          publicationDate={props.published_date}
          sourceName={props.source_name}
          onClose={closeFeedbackPopup}
        />
      )}
      {/* Modal Component */}
      {isReaderOpen && (
        <Reader
          title={props.title}
          content={props.content}
          onClose={closeReader}
          onFeedback={handleFeedback}
        />
      )}
    </div>
  );
}
