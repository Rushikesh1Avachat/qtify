import React from "react";
import styles from "./Button.module.css";

function Button({ text }) {
  return (
    // Requirement #4-8: Styles applied via the .button class
    <button className={styles.button}>
      {text}
    </button>
  );
}

export default Button;