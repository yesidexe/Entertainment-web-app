import { useContext } from "react";
import Layout from "../../components/Layout"
import { useDiscover } from "../../hook/useDiscover";
import { AppContext } from "../../context";

import styles from './Genre.module.css'
import { ArrowBackIcon } from "../../components/Icons";
import { useNavigate } from "react-router-dom";
import Cards from "../../components/Cards";

function Genre() {
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)    
    const {searchBy, actualGnre} = useContext(AppContext)
    const [gnre_status, gnre_data] = useDiscover(searchBy, index)
    const navigate = useNavigate()

    return (
        <Layout>
            <div className={styles.SearchResultsWrapper}>
                <div className={styles.resultsFor}>
                    <ArrowBackIcon onClick={() => navigate(-1)} strokeWidth={1.5} className={styles.icon} />
                    <span>{`Search results by "${actualGnre}"...`}</span>
                </div>
                <div className={styles.results}>
                    {
                        gnre_data.map((data) => {
                            const mediaType = data.title ? 'movie' : 'tv'
                            return <Cards key={data.id} type={mediaType} data={data} />
                        })
                    }
                </div>
            </div>
        </Layout>        
    );
}

export default Genre;