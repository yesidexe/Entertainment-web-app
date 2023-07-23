import { useLists } from '../../hook/useLists';
import Cards from '../Cards';
import SkeletonTopRated from '../skeletons/SkeletonTopRated';
import styles from './CardsContainer.module.css'

function CardsContainer({ type, lists }: { type: string, lists: string }) {
    const [list_status, list_data] = useLists(type, lists)

    return (

        <div className={styles.cardsWrapper}>
            {
                list_status === 'loading' &&
                Array(5).fill(null).map((_,index) =>{
                    return <SkeletonTopRated key={index}/>
                })  
            }
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