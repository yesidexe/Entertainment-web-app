import { useContext, useState } from "react";
import { SearchIcon } from "../Icons";
import styles from "./SearchBar.module.css"
import { AppContext } from "../../context";
import { useNavigate } from 'react-router-dom';


function SearchBar() {
    const [ query, setQuery ] = useState<string>('')
    const { setSearchTerm, searchBy } = useContext(AppContext)
    const navigate = useNavigate()



    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearchTerm(query)
        setQuery('')
        navigate('/search-results');
    }

    return (
        <form onSubmit={handleSubmit} className={styles.formWrapper}>
            <SearchIcon />
            <div className={styles.inputSearch}>
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    type="text"
                    placeholder={`Search for ${searchBy === 'movie' ? 'movies' : (searchBy === 'tv' ? 'tv series' : 'movies or TV series')}`}
                />
            </div>
        </form>
    );
}

export default SearchBar;