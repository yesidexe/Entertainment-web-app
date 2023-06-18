import styles from './CardsWrapper.module.css'
import movies from '../../../with-results.json'
import Cards from '../Cards';
function Movies() {
    //borrar luego
    type Data = {
        Title: string;
        Year: string;
        imdbID: string;
        Type: string;
        Poster: string;
    }

    //esto luego se borraxd
    const data: Data[] = movies.Search

    return (
        <div className={styles.cardsWrapper}>
            {
                data.map((dat: Data) => {
                    return (
                        <Cards key={dat.imdbID} data={dat} />
                    )
                })
            }
        </div>
    );
}

export default Movies;