import { useNavigate } from 'react-router-dom';
import CircleProgress from '../CircleProgress';
import { HeartIcon, MovieIcon, DeviceTvIcon } from '../Icons';
import styles from './cards.module.css'

function Cards({ type, data }: { type: string, data: ResultsLists | SearchResults | DiscoverMovies }) {
    const poster = `${import.meta.env.VITE_IMAGE_API}${data.backdrop_path}`
    const navigate = useNavigate()

    
    const handleOnClick = ()=>{
        navigate(`/${type}/${data.id}`)
    }

    return (
        <article className={styles.cardWrapper}>
            <figure onClick={handleOnClick}>
                <img alt={data.original_title} width={'100%'} height={260} src={poster} />
                <span className={styles.favWrapper}><HeartIcon strokeWidth={2} className={styles.favIcon} /></span>
                {
                    data.vote_average > 0 &&
                    <span className={styles.circleWrapper}><CircleProgress percentage={Math.floor(data.vote_average * 10) / 10} /></span>
                }
            </figure>

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
                <p className={styles.cardTitle}>
                    {data.title ? data.title : data.name}
                </p>
            </div>
        </article>
    );
}

export default Cards;