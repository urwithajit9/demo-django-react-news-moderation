import styles from "./Header.module.css";
import logo from "../assests/images/feedback.png";
export default function Header() {
  return (
    <div className={styles.header}>
      <img
        src={logo}
        alt="MegaProject Logo"
        className={styles["header-logo"]}
      />
      <h1 className={styles["header-title"]}>Megaproject Data Feedback</h1>
    </div>
  );
}
