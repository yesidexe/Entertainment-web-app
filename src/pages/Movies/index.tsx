import Genres from "../../components/Genres";
import { AlarmIcon, CircleArrowUpIcon, PlayerPlayIcon, StarIcon } from "../../components/Icons";
import Slider from "../../components/Slider";
import { useLists } from "../../hook/useLists";
import styles from "./Movies.module.css"

function Movies() {
    const [nowPlaying_status, nowPlaying_data] = useLists('movie','now_playing')
    const [popular_status, popular_data] = useLists('movie','popular')
    const [topRated_status, topRated_data] = useLists('movie','top_rated')
    const [upcoming_status, upcoming_data] = useLists('movie','upcoming')

    return (            
            <div className={styles.movieWrapper}>
                <Genres/>
                {/* Now Playing  */}
                <section className={styles.section}>
                    <span>
                        <h2 className={styles.h2Title}>Now playing</h2>
                        <PlayerPlayIcon strokeWidth={2} className={styles.icon}/>
                    </span>
                    <div className={styles.subSectionWrapper}>
                        {
                            nowPlaying_status === 'success' &&
                            <Slider type={'movie'} data={nowPlaying_data} imageType={'backdrop'} slidesPerView={1}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1.5,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3.5,
                                    spaceBetween: 30,
                                }
                            }}/>
                        }                        
                    </div>                    
                </section>
                {/*Popular*/}
                <section className={styles.section}>
                    <span>
                        <h2 className={styles.h2Title}>Popular</h2>
                        <CircleArrowUpIcon strokeWidth={2} className={styles.icon}/>
                    </span>
                    <div className={styles.subSectionWrapper}>
                        {
                            popular_status === 'success' &&
                            <Slider type={'movie'} data={popular_data} imageType={'backdrop'} slidesPerView={1}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1.5,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3.5,
                                    spaceBetween: 30,
                                }
                            }}/>
                        }                        
                    </div>                    
                </section>
                {/* Top Rated */}
                <section className={styles.section}>
                    <span>
                        <h2 className={styles.h2Title}>Top Rated</h2>
                        <StarIcon strokeWidth={2} className={styles.icon}/>
                    </span>
                    <div className={styles.subSectionWrapper}>
                        {
                            topRated_status === 'success' &&
                            <Slider type={'movie'} data={topRated_data} imageType={'backdrop'} slidesPerView={1}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1.5,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3.5,
                                    spaceBetween: 30,
                                }
                            }}/>
                        }                        
                    </div>                    
                </section>
                {/* UpComning */}
                <section className={styles.section}>
                    <span>
                        <h2 className={styles.h2Title}>Upcoming</h2>
                        <AlarmIcon strokeWidth={2} className={styles.icon}/>
                    </span>
                    <div className={styles.subSectionWrapper}>
                        {
                            upcoming_status === 'success' &&
                            <Slider type={'movie'} data={upcoming_data} imageType={'backdrop'} slidesPerView={1}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1.5,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3.5,
                                    spaceBetween: 30,
                                }
                            }}/>
                        }                        
                    </div>                    
                </section>
            </div>      
    );
}

export default Movies;