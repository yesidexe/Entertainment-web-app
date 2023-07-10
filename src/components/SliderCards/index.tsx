import { HeartIcon, MovieIcon, DeviceTvIcon } from '../Icons';
import styles from './trendingSliderCards.module.css'

type TypeSliderCards = {
    type: string,
    data: ResultsLists | TrendingType,
    imageType: string,
}

function SliderCards({ type,data,imageType }:TypeSliderCards) {
    const poster = `${import.meta.env.VITE_IMAGE_API}${data.poster_path}`
    const backdrop = `${import.meta.env.VITE_IMAGE_API}${data.backdrop_path}`

    return (
        <div className={`keen-slider__slide ${styles.slide}`}>
            <figure>
                <img alt={data.title} width={'100%'} height={'100%'} src={imageType==='poster'?poster:backdrop} />
            </figure>
            <span className={styles.favWrapper}><HeartIcon strokeWidth={2} className={styles.favIcon} /></span>
            <div className={styles.cardDetails}>
                <span>
                    {
                        type === 'movie'
                        ? <MovieIcon strokeWidth={1.5} className={styles.icons} />
                        : <DeviceTvIcon strokeWidth={1.5} className={styles.icons} />
                    }                    
                    <p>{type}</p>
                </span>
                <p className={styles.cardTitle}>
                    {data.title ? data.title : data.name}
                </p>
            </div>
        </div>
    );
}

export default SliderCards;

/*import { HeartIcon, MovieIcon, DeviceTvIcon } from '../Icons/Icons';
import styles from './trendingSliderCards.module.css'

function SliderCards({ type,data }:{type:string, data:TrendingType}) {
    const poster = `${import.meta.env.VITE_IMAGE_API}${data.poster_path}`

    return (
        <div className={`keen-slider__slide ${styles.slide}`}>
            <figure>
                <img alt={data.title} width={'100%'} height={'100%'} src={poster} />
            </figure>
            <span className={styles.favWrapper}><HeartIcon strokeWidth={2} className={styles.favIcon} /></span>
            <div className={styles.cardDetails}>
                <span>
                    {
                        type === 'movie'
                        ? <MovieIcon strokeWidth={1.5} className={styles.icons} />
                        : <DeviceTvIcon strokeWidth={1.5} className={styles.icons} />
                    }                    
                    <p>{type}</p>
                </span>
                <p className={styles.cardTitle}>
                    {data.title ? data.title : data.name}
                </p>
            </div>
        </div>
    );
}

export default SliderCards;*/