import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoWrapper}>
        <Logo />
      </div>
      {/* Requirement #3: Must contain the keyword 'search' */}
      <Search placeholder="search an album of your choice" />
      {/* Requirement #4-8: Handled via CSS in the Button component or passed classes */}
      <Button text="Give Feedback" />
    </nav>
  );
};

export default Navbar;
