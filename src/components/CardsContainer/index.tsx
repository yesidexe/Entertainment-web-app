import { useLists } from '../../hook/useLists';
import Cards from '../Cards';
import styles from './CardsContainer.module.css'

function CardsContainer({ type, lists }: { type: string, lists: string }) {
    const [list_status, list_data] = useLists(type, lists)

    return (

        <div className={styles.cardsWrapper}>
            {
                list_status === 'success' &&
                list_data.slice(0, 5).map((data) => {
                    return (
                        <Cards type={type} key={data.id} data={data} />
                    )
                })
            }
        </div>
    );
}

export default CardsContainer;