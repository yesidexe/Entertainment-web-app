import { useCredits } from '../../hook/useCredits'
import { useDetails } from '../../hook/useDetails'
import CircleProgress from '../CircleProgress'
import { ChevronRightIcon } from '../Icons'
import styles from './TvDetails.module.css'

function TvDetails({ type, index }: { type: string, index: string }) {
    const [details_status, details_data] = useDetails(type, index)
    const [credits_status, credits_data] = useCredits(type, index)

    const backdrop = `${import.meta.env.VITE_IMAGE_API}${details_data?.backdrop_path}`
    const poster = `${import.meta.env.VITE_IMAGE_API}${details_data?.poster_path}`
    const ratedPercentage = details_data?.vote_average && Math.floor(details_data.vote_average * 10) / 10

    return (
        <div className={styles.tvShowContainer} >
            {/* Imagen de fondo, el backdrop */}
            < img width={'100%'} src={backdrop} className={styles.backdrop} />
            {/* el contenedor secundario */}
            < div className={styles.tvShowWrapper} >
                {/* Primera sección con el poster, descripcion y detalles */}
                < section className={styles.tvDetails} >
                    <img className={styles.tvPoster} width={300} height={'100%'} src={poster} />
                    <div className={styles.detailsWrapper}>
                        {/* Título y generos */}
                        <div className={styles.titleWrapper}>
                            <div className={styles.tvTitle}>
                                <h2>{details_data?.name}</h2>
                                <span>({details_data?.first_air_date.substring(0, 4)})</span>
                            </div>
                            <div className={styles.tvGenres}>
                                {
                                    details_data?.genres.map((genre) => {
                                        return <span key={genre.id}>{genre.name}</span>
                                    })
                                }
                            </div>
                        </div>
                        {/* Rating, created by, seasons */}
                        <div className={styles.othersDetails}>
                            <div className={styles.topRated}>
                                {ratedPercentage &&
                                    <CircleProgress percentage={ratedPercentage} />}
                                <span> Ratings </span>
                            </div>
                            {
                                details_data?.created_by[0]?.name &&
                                <div className={styles.createdBy}>
                                    <h3>Created by: </h3>
                                    <span>{details_data.created_by[0].name}</span>
                                </div>
                            }
                            <div className={styles.createdBy}>
                                <h3>Seasons: </h3>
                                <span>{details_data?.seasons.length}</span>
                            </div>
                        </div>

                        {/* tag line */}
                        {
                            details_data?.tagline &&
                            <p className={styles.tagLine}>{details_data.tagline}</p>
                        }
                        {/* el resumen */}
                        <div className={styles.summaryWrapper}>
                            <p>{details_data?.overview}</p>
                        </div>
                    </div>
                </section >

                {/* sección del cast */}
                < section className={styles.castWrapper} >
                    <h3>Cast</h3>
                    <div className={styles.cast}>
                        {
                            (credits_data.cast)?.slice(0, 7).map((cast) => {
                                const profilePath = `${import.meta.env.VITE_IMAGE_API}${cast.profile_path}`

                                return (
                                    <div key={cast.id} className={styles.castDetailsWrapper}>
                                        <figure>
                                            <img height={'100%'} width={'100%'} src={profilePath} alt={cast.name} />
                                        </figure>
                                        <div className={styles.castDetails}>
                                            <p>{cast.name}</p>
                                            <p>{cast.character}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <span className={styles.seeMore}>
                            See more
                            <span><ChevronRightIcon strokeWidth={1.5} className={styles.icons} /></span>
                        </span>
                    </div>
                </section >

            </div >
        </div >
    )
}

export default TvDetails;