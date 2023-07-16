import { Link } from 'react-router-dom';
import { imagePath, minAHrs } from '../../utils';
import CircleProgress from '../CircleProgress';
import styles from './MediaDetails.module.css'
import { useContext } from 'react';
import { AppContext } from '../../context';

function MediaDetails({ data, director }: { data: DetailsType | null, director: CrewCredits | undefined }) {
    const currentPath = window.location.pathname
    let type = currentPath.includes('movie') ? 'movie' : (currentPath.includes('tv') ? 'tv' : '')
    const ratedPercentage = data?.vote_average && Math.floor(data.vote_average * 10) / 10

    const {setActualGnre} = useContext(AppContext)

    return (
        <section className={styles.tvDetails} >
            {
                data?.poster_path &&
                <img className={styles.tvPoster} height={'420px'} src={imagePath(data.poster_path)} />
            }
            <div className={styles.detailsWrapper}>
                {/* Título y generos */}
                <div className={styles.titleWrapper}>
                    <h2 className={styles.tvTitle}>
                        {type === 'movie' ? data?.title : (type === 'tv' ? data?.name : '')}
                        <span>{type === 'movie' ? data?.release_date.substring(0, 4) : (type === 'tv' ? data?.first_air_date.substring(0, 4) : null)}</span>
                    </h2>
                    <div className={styles.tvGenres}>
                        {
                            data?.genres.map((genre) => {
                                return (
                                    <Link key={genre.id} onClick={() => setActualGnre(genre.name)} to={`/${type}/genre/${genre.id}`}>
                                        {genre.name}
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
                {/* Rating, created by, seasons */}
                <div className={styles.othersDetails}>
                    {
                        ratedPercentage && ratedPercentage > 0 ? (
                            <div className={styles.topRated}>
                                <CircleProgress percentage={ratedPercentage} />
                                <span> Ratings </span>
                            </div>
                        ) : null
                    }

                    {
                        type === 'movie' &&
                        <>
                            {data?.runtime && data.runtime > 0 ? (
                                <div className={styles.createdBy}>
                                    <span>{minAHrs(data.runtime)}</span>
                                </div>
                            ) : null
                            }
                            {director?.name &&
                                <div className={styles.createdBy}>
                                    <h3>Directed by: </h3>
                                    <span>{director.name}</span>
                                </div>
                            }
                        </>
                    }
                    {
                        type === 'tv' &&
                        <>
                            {data?.created_by[0]?.name &&
                                <div className={styles.createdBy}>
                                    <h3>Created by: </h3>
                                    <span>{data.created_by[0].name}</span>
                                </div>
                            }
                            {data?.seasons &&
                                <div className={styles.createdBy}>
                                    <h3>Seasons: </h3>
                                    <span>{data.seasons.length}</span>
                                </div>
                            }
                        </>
                    }
                </div>
                {/* tag line */}
                {
                    data?.tagline &&
                    <p className={styles.tagLine}>{data.tagline}</p>
                }
                {/* el resumen */}
                {data?.overview &&
                    <div className={styles.summaryWrapper}>
                        <p>{data.overview}</p>
                    </div>
                }
            </div>
        </section>
    );
}

export default MediaDetails;