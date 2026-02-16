import React from "react";
import styles from "./Footer.module.css"; // Import the CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} MegaProject</p>
      <p>
        Contact us at:
        <a href="mailto:contact@megaproject.com"> contact@megaproject.com</a>
      </p>
    </footer>
  );
};

export default Footer;
