import styles from "./FeedbackPanel.module.css";
export default function FeedbackPanel({ onApprove, onReport, isDisabled }) {
  return (
    <div className={styles.feedbackpanel}>
      <button
        className={styles.buttonReport}
        onClick={onReport}
        disabled={isDisabled}
      >
        Report
      </button>
      <button
        className={styles.buttonApprove}
        onClick={onApprove}
        disabled={isDisabled}
      >
        Approve
      </button>
    </div>
  );
}
