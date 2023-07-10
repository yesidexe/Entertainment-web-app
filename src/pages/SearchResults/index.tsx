import { useContext } from 'react';
import { AppContext } from "../../context";
import { Link, useNavigate } from 'react-router-dom'
import { useSearch } from '../../hook/useSearch';
import Cards from '../../components/Cards';
import { ArrowBackIcon } from '../../components/Icons';
import styles from './SearchResults.module.css'
import Layout from '../../components/Layout';



function SearchResults() {
    const { searchTerm } = useContext(AppContext)
    const [results_status, results_data] = useSearch(searchTerm)
    const navigate = useNavigate()

    return (
        <Layout>
            <div className={styles.SearchResultsWrapper}>
                <div className={styles.resultsFor}>
                    <ArrowBackIcon onClick={() => navigate(-1)} strokeWidth={1.5} className={styles.icon} />
                    <span>{`Search results for "${searchTerm}"...`}</span>
                </div>
                <div className={styles.results}>
                    {
                        results_data.map((data) => {
                            const mediaType = data.title ? 'movie' : 'tv'
                            return <Cards key={data.id} type={mediaType} data={data} />
                        })
                    }
                </div>
            </div>
        </Layout>
    );
}

export default SearchResults;