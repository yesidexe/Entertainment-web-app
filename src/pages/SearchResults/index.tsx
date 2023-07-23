import { useContext } from 'react';
import { AppContext } from "../../context";
import { useNavigate } from 'react-router-dom'
import { useSearch } from '../../hook/useSearch';
import Cards from '../../components/Cards';
import { ArrowBackIcon } from '../../components/Icons';
import styles from './SearchResults.module.css'



function SearchResults() {
    const { searchTerm } = useContext(AppContext)
    const [results_status, results_data] = useSearch(searchTerm)
    const navigate = useNavigate()

    return (
        <div className={styles.SearchResultsWrapper}>
            <div className={styles.resultsFor}>
                <ArrowBackIcon onClick={() => navigate(-1)} strokeWidth={1.5} className={styles.icon} />
                <span>{`Search results for "${searchTerm}"...`}</span>
            </div>
            <div className={styles.results}>
                {
                    results_status === 'success' &&
                    results_data.map((data) => {
                        const mediaType = data.title ? 'movie' : 'tv'
                        return <Cards key={data.id} type={mediaType} data={data} />
                    })
                }
            </div>
        </div>
    );
}

export default SearchResults;