import Genres from "../../components/Genres";
import { AlarmIcon, CircleArrowUpIcon, PlayerPlayIcon, StarIcon } from "../../components/Icons";
import Slider from "../../components/Slider";
import { useLists } from "../../hook/useLists";

import styles from './Tv.module.css'

function Tv() {
    const [airingToday_status, airingToday_data] = useLists('tv', 'airing_today')
    const [onTheAir_status, onTheAir_data] = useLists('tv', 'on_the_air')
    const [popular_status, popular_data] = useLists('tv', 'popular')
    const [topRated_status, topRated_data] = useLists('tv', 'top_rated')

    return (
        <div className={styles.movieWrapper}>
            <Genres />
            {/* Airing today  */}
            <section className={styles.section}>
                <span>
                    <h2 className={styles.h2Title}>Airing today</h2>
                    <PlayerPlayIcon strokeWidth={2} className={styles.icon} />
                </span>
                <div className={styles.subSectionWrapper}>
                    {
                        airingToday_status === 'success' &&
                        <Slider type={'tv'} data={airingToday_data} imageType={'backdrop'} slidesPerView={1}
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
                            }} />
                    }
                </div>
            </section>

            {/*On The Air*/}
            <section className={styles.section}>
                <span>
                    <h2 className={styles.h2Title}>On The Air</h2>
                    <CircleArrowUpIcon strokeWidth={2} className={styles.icon} />
                </span>
                <div className={styles.subSectionWrapper}>
                    {
                        onTheAir_status === 'success' &&
                        <Slider type={'tv'} data={onTheAir_data} imageType={'backdrop'} slidesPerView={1}
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
                            }} />
                    }
                </div>
            </section>

            {/* Popular */}
            <section className={styles.section}>
                <span>
                    <h2 className={styles.h2Title}>Popular</h2>
                    <StarIcon strokeWidth={2} className={styles.icon} />
                </span>
                <div className={styles.subSectionWrapper}>
                    {
                        popular_status === 'success' &&
                        <Slider type={'tv'} data={popular_data} imageType={'backdrop'} slidesPerView={1}
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
                            }} />
                    }
                </div>
            </section>

            {/* Top rated */}
            <section className={styles.section}>
                <span>
                    <h2 className={styles.h2Title}>Top rated</h2>
                    <AlarmIcon strokeWidth={2} className={styles.icon} />
                </span>
                <div className={styles.subSectionWrapper}>
                    {
                        topRated_status === 'success' &&
                        <Slider type={'tv'} data={topRated_data} imageType={'backdrop'} slidesPerView={1}
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
                            }} />
                    }
                </div>
            </section>
        </div>
    );
}

export default Tv;