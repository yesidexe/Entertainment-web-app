import { useContext } from "react";

import styles from './Body.module.css'

import { AppContext } from "../../context";
import SearchResults from "../SearchResults";
import Home from "../Home";

function Body() {
    const { searchTerm } = useContext(AppContext)

    return (
        <div className={styles.bodyWrapper}>
            {searchTerm !== ''
                ? <SearchResults />
                : <Home />
            }
        </div>
    );
}

export default Body;