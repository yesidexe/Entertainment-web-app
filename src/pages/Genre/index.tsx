import { useContext, useEffect } from "react";
import { useDiscover } from "../../hook/useDiscover";
import { AppContext } from "../../context";
import { ArrowBackIcon } from "../../components/Icons";
import { Link, useNavigate } from "react-router-dom";
import Cards from "../../components/Cards";
import styles from './Genre.module.css'

function Genre() {
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    let type = currentPath.includes('movie') ? 'movie' : (currentPath.includes('tv') ? 'tv' : '')

    const { actualGnre } = useContext(AppContext)
    const [gnre_status, gnre_data] = useDiscover(type, index)
    const navigate = useNavigate()

    useEffect(() => {
        if (actualGnre === '') {
            navigate(`/${type}`);
        }
    }, [actualGnre]);

    return (
            <div className={styles.SearchResultsWrapper}>
                <div className={styles.resultsFor}>
                    <Link to={`/${type}`}>
                        <ArrowBackIcon strokeWidth={1.5} className={styles.icon} />
                    </Link>
                    <span>{`Search results by "${actualGnre}"...`}</span>
                </div>
                <div className={styles.results}>
                    {
                        gnre_status === 'success' &&
                        gnre_data.map((data) => {
                            const mediaType = data.title ? 'movie' : 'tv'
                            return <Cards key={data.id} type={mediaType} data={data} />
                        })
                    }
                </div>
            </div>
    );
}

export default Genre;