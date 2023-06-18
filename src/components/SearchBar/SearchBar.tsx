import { SearchIcon } from "../Icons/Icons";
import styles from "./SearchBar.module.css"

function SearchBar() {
    return (
        <form className={styles.formWrapper}>
            <SearchIcon />
            <div className={styles.inputSearch}>
                <input                    
                    type="search"
                    placeholder="Search for movies or TV series"
                />
            </div>

        </form>
    );
}

export default SearchBar;