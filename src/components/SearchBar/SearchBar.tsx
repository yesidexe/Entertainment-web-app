import { useContext, useState } from "react";
import { SearchIcon } from "../Icons";
import { AppContext } from "../../context";
import { useNavigate } from 'react-router-dom';
import styles from "./SearchBar.module.css"


function SearchBar() {
    const [ query, setQuery ] = useState<string>('')
    const { setSearchTerm } = useContext(AppContext)

    const currenPath = window.location.pathname
    const type = currenPath.includes('movie') ? 'movie' : (currenPath.includes('tv') ? 'tv' : '')
    
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
                    placeholder={`Search for ${type === 'movie' ? 'movies' : (type === 'tv' ? 'tv series' : 'movies or TV series')}`}
                />
            </div>
        </form>
    );
}

export default SearchBar;