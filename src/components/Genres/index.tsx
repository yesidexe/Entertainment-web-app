import { useCategories } from "../../hook/useCategories";
import { Link } from 'react-router-dom'
import styles from './Genres.module.css'
import { useContext } from "react";
import { AppContext } from "../../context";

function Genres({type}:{type:string}) {
    const [movieCategories_status, movieCategories_data] = useCategories(type)
    const {setActualGnre} = useContext(AppContext)

    return (
        <div className={styles.gnresWrapper}>
            <ul>
                {
                    movieCategories_data.map((gnre)=>{
                        return(
                            <li className={styles.gnreLi} key={gnre.id}>
                                <Link onClick={()=>setActualGnre(gnre.name)} to={`/genre/${gnre.id}`}>
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