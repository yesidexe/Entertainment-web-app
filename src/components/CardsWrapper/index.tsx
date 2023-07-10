import styles from './CardsWrapper.module.css'
import Cards from '../Cards';
import { useLists } from '../../hook/useLists';
function Movies({type, lists}:{type:string, lists:string}) {
    const [topRated_status, topRated_data] = useLists(type,lists)

    return (
        <div className={styles.cardsWrapper}>
            {
                topRated_data.slice(0,5).map((data) => {
                    return (
                        <Cards type={type} key={data.id} data={data} />
                    )
                })
            }
        </div>
    );
}

export default Movies;