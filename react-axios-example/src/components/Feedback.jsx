import React, { useState } from "react";
import { submitFeedback } from "../api";
import styles from "./Feedback.module.css";
import ContentQuality from "./ContentQuality";

const Feedback = ({ title, publicationDate, sourceName, onClose }) => {
  const [feedback, setFeedback] = useState("");
  const [isMegaproject, setIsMegaproject] = useState("Yes");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [contentStatus, setContentStatus] = useState("Clean");

  // Handler function to update state when a radio button is selected
  const handlemegaprojecttype = (event) => {
    setIsMegaproject(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    console.log(contentStatus);
    try {
      await submitFeedback(
        title,
        publicationDate,
        sourceName,
        feedback,
        isMegaproject,
        contentStatus
      );
      onClose(); // Close the popup on successful submission
    } catch (error) {
      setError("Failed to submit feedback. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.feedbackpopup}>
      <div className={styles.feedbackoverlay} onClick={onClose}></div>
      <div className={styles.feedbackcontent}>
        <h2>Submit Feedback</h2>
        {error && <p className={styles.errormessage}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <ContentQuality
            contentStatus={contentStatus}
            setContentStatus={setContentStatus}
          />
          <div className={styles.megaprojectselector}>
            <h1>Is it a Megaproject?</h1>
            <label>
              <input
                type="radio"
                value="Yes"
                checked={isMegaproject === "Yes"}
                onChange={handlemegaprojecttype}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="No"
                checked={isMegaproject === "No"}
                onChange={handlemegaprojecttype}
              />
              No
            </label>
            <label>
              <input
                type="radio"
                value="May Be"
                checked={isMegaproject === "May Be"}
                onChange={handlemegaprojecttype}
              />
              Maybe
            </label>
          </div>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Enter your feedback here..."
            rows="4"
            required
          />
          <div className={styles.feedbackbuttons}>
            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.submitbutton}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className={styles.cancelbutton}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
