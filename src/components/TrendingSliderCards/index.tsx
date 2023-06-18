import { DeviceTvIcon, HeartIcon, MovieIcon } from '../Icons/Icons';
import styles from './trendingSliderCards.module.css'


type Data = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}
function TrendingSliderCards({ data }: { data: Data }) {

    return (
        <div className={`keen-slider__slide ${styles.slide}`}>
            <figure>
                <img width={'100%'} src={data.Poster} />
            </figure>
            <span className={styles.favWrapper}><HeartIcon strokeWidth={2} className={styles.favIcon}/></span>
            <div className={styles.cardDetails}>
                <div>
                    <p>{data.Year}</p>
                    <span>
                        {data.Type === 'movie'
                            //Arreglar los iconos
                            ? <MovieIcon strokeWidth={1.5} className={styles.icons}/>
                            : <DeviceTvIcon strokeWidth={1.5} className={styles.icons}/>
                        }
                        <p>{data.Type}</p>
                    </span>
                </div>
                <p className={styles.cardTitle}>{data.Title}</p>
            </div>
        </div>
    );
}

export default TrendingSliderCards;