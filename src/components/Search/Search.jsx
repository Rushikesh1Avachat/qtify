import searchIcon from "../../assets/search-icon.svg"
import styles from "./Search.module.css"
const Search = () => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search a album of your choice"
      />
      <button className={styles.iconButton}>
        <img
          src={searchIcon}
          alt="search"
          className={styles.icon}
        />
      </button>
    </div>
  );
};

export default Search;
