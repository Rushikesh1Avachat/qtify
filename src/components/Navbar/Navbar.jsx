import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      {/* Ensure the placeholder includes the keyword 'search' */}
      <Search placeholder="Search a song of your choice" />
      <Button text="Feedback" />
    </nav>
  );
};

export default Navbar;