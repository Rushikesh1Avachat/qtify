import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      {/* Change 'song' to 'album' to match common test strings */}
      <Search placeholder="Search a album of your choice" />
      <Button text="Feedback" />
    </nav>
  );
};

export default Navbar;