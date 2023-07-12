import { useContext } from "react";
import { AppContext } from "../../context";
import { useCategories } from "../../hook/useCategories";
import { Link } from 'react-router-dom'
import styles from './Genres.module.css'

function Genres() {
    const currentPath = window.location.pathname
    let type = currentPath.includes('movie') ? 'movie' : (currentPath.includes('tv') ? 'tv' : '')

    const [Categories_status, Categories_data] = useCategories(type)
    const {setActualGnre} = useContext(AppContext)

    return (
        <div className={styles.gnresWrapper}>
            <ul>
                {
                    Categories_status === 'success' &&
                    Categories_data.map((gnre)=>{
                        
                        return(
                            <li className={styles.gnreLi} key={gnre.id}>
                                <Link onClick={()=>setActualGnre(gnre.name)} to={`genre/${gnre.id}`}>
                                    {gnre.name}
                                </Link>                                
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Genres;