import React, { useState } from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import { truncate } from "../../helpers/helpers";

const Search = ({ placeholder, data }) => {
  const [val, setVal] = useState("");

  const handleLinkClick = (title) => {
    setVal(""); // Clear search after selection
    // Custom logic to scroll to section can be triggered here
    const section = document.getElementById(title);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.searchContainer} onSubmit={(e) => e.preventDefault()}>
        <input
          className={styles.search}
          placeholder={placeholder}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          required
        />
        <button className={styles.searchButton} type="submit">
          <SearchIcon />
        </button>
      </form>

      {val.length > 0 && (
        <ul className={styles.dropdown}>
          {data.filter((item) => 
            item.title.toLowerCase().includes(val.toLowerCase())
          ).map((item) => (
            <li 
              key={item.id} 
              className={styles.dropdownItem}
              onClick={() => handleLinkClick(item.title)}
            >
              <img src={item.image} alt={item.title} width={40} />
              <p>{truncate(item.title, 35)}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;