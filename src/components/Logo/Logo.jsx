import styles from "./Logo.module.css";
import logoText from "../../assets/logo.png";
import headphoneIcon from "../../assets/headphone.png";

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img
        src={headphoneIcon}
        alt="Qtify Headphone"
        className={styles.icon}
      />
      <img
        src={logoText}
        alt="Qtify Logo"
        className={styles.text}
      />
    </div>
  );
};

export default Logo;

