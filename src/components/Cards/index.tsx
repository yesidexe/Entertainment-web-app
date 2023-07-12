import { Link } from 'react-router-dom';
import CircleProgress from '../CircleProgress';
import { HeartIcon, MovieIcon, DeviceTvIcon } from '../Icons';
import { imagePath } from '../../utils'
import styles from './cards.module.css'

function Cards({ type, data }: { type: string, data: ResultsLists | SearchResults | DiscoverMovies }) {
    
    return (
        <div className={styles.cardWrapper}>
            <Link to={`/${type}/${data.id}`}>
                <figure>
                    <img alt={data.original_title} width={'100%'} height={260} src={imagePath(data.backdrop_path)} />
                    <span className={styles.favWrapper}><HeartIcon strokeWidth={2} className={styles.favIcon} /></span>
                    {
                        data.vote_average > 0 &&
                        <span className={styles.circleWrapper}><CircleProgress percentage={Math.floor(data.vote_average * 10) / 10} /></span>
                    }
                </figure>
            </Link>

            <div className={styles.cardDetails}>
                <div>
                    <span>
                        {
                            type === 'movie'
                                ? <MovieIcon strokeWidth={1.5} className={styles.icons} />
                                : <DeviceTvIcon strokeWidth={1.5} className={styles.icons} />
                        }
                        <p>{type}</p>
                    </span>
                </div>
                <Link to={`/${type}/${data.id}`}>
                    <p className={styles.cardTitle}>
                        {data.title ? data.title : data.name}
                    </p>
                </Link>

            </div>
        </div>
    );
}

export default Cards;