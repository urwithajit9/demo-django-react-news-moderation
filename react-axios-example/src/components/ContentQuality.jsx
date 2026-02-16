import styles from "./ContentQuality.module.css";
import React, { useState } from "react";

export default function ContentQuality({ contentStatus, setContentStatus }) {
  //   const [contentStatus, setContentStatus] = useState("Yes");

  // Handler function to update state when a radio button is selected
  const handlecontentStatus = (event) => {
    setContentStatus(event.target.value);
  };

  return (
    <div className={styles.feedbackSelector}>
      <h1>Is the Content is clean?</h1>
      <label>
        <input
          type="radio"
          value="Yes"
          checked={contentStatus === "Yes"}
          onChange={handlecontentStatus}
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          value="Missing Content"
          checked={contentStatus === "Missing Content"}
          onChange={handlecontentStatus}
        />
        Missing Content
      </label>
      <label>
        <input
          type="radio"
          value="Extra Content (Noise)"
          checked={contentStatus === "Extra Content (Noise)"}
          onChange={handlecontentStatus}
        />
        Extra Content (Noise)
      </label>
    </div>
  );
}
