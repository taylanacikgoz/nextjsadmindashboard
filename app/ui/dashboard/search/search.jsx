import styles from "../search/search.module.css";
import { MdSearch } from "react-icons/md";

const Search = ({ placeholder }) => {
  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
      ></input>
    </div>
  );
};

export default Search;
