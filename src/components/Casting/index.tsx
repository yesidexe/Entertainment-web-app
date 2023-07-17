import { ChevronRightIcon } from '../Icons';
import NoImage from '../NoImage';
import styles from './Casting.module.css'

function Casting({ data }: { data: Credits }) {
    return (
        <section className={styles.castWrapper} >
            {
                data.cast.length > 0 &&
                <h3>Cast</h3>
            }
            <div className={styles.cast}>
                {
                    (data.cast).slice(0, 7).map((cast) => {
                        const profilePath = `${import.meta.env.VITE_IMAGE_API}${cast.profile_path}`

                        return (
                            <div key={cast.id} className={styles.castDetailsWrapper}>
                                {
                                    cast.profile_path ?
                                        <img width={'80px'} height={'130px'} src={profilePath} alt={cast.name} />
                                        : <NoImage />

                                }
                                <div className={styles.castDetails}>
                                    <p>{cast.name}</p>
                                    <p>{cast.character}</p>
                                </div>
                            </div>
                        )
                    })
                }
                {
                    (data.cast)?.length > 7 &&
                    <span className={styles.seeMore}>
                        See more
                        <span><ChevronRightIcon strokeWidth={1.5} className={styles.icons} /></span>
                    </span>
                }
            </div>
        </section >
    );
}

export default Casting;

