import { DeviceTvIcon, HeartIcon, MovieIcon } from '../Icons/Icons';
import styles from './cards.module.css'

type Data = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

function Cards({ data }:{data:Data}) {

    return (
        <article className={styles.cardWrapper}>
            <figure>
                <img width={300} height={200} alt={`Poster de ${data.Title}`} src={data.Poster} />
                <span className={styles.favWrapper}><HeartIcon strokeWidth={2} className={styles.favIcon}/></span>
            </figure>
            
            <div className={styles.cardDetails}>
                <div>
                    <p>{data.Year}</p>
                    <span>
                        {data.Type === 'movie'
                            //Arreglar los iconos
                            ? <MovieIcon strokeWidth={1.5} className={styles.icons} />
                            : <DeviceTvIcon strokeWidth={1.5} className={styles.icons}/>
                        }
                        <p>{data.Type}</p>
                    </span>
                </div>
                <p className={styles.cardTitle}>{data.Title}</p>
            </div>
        </article>
    );
}

export default Cards;