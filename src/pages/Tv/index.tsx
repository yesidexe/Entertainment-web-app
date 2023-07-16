import Genres from "../../components/Genres";
import { AlarmIcon, CircleArrowUpIcon, PlayerPlayIcon, StarIcon } from "../../components/Icons";
import Layout from "../../components/Layout";
import Slider from "../../components/Slider";
import { useLists } from "../../hook/useLists";

import styles from './Tv.module.css'

function Tv() {
    const [airingToday_status, airingToday_data] = useLists('tv','airing_today')
    const [onTheAir_status, onTheAir_data] = useLists('tv','on_the_air')
    const [popular_status, popular_data] = useLists('tv','popular')
    const [topRated_status, topRated_data] = useLists('tv','top_rated')

    return (
        <Layout>
            <Genres/>
            <div className={styles.movieWrapper}>
                {/* Airing today  */}
                <section className={styles.section}>
                    <span>
                        <h2 className={styles.h2Title}>Airing today</h2>
                        <PlayerPlayIcon strokeWidth={2} className={styles.icon}/>
                    </span>
                    <div className={styles.subSectionWrapper}>
                        <Slider type={'tv'} data={airingToday_data} imageType={'backdrop'} slidesPerView={1}/>
                    </div>                    
                </section>

                {/*On The Air*/}
                <section className={styles.section}>
                    <span>
                        <h2 className={styles.h2Title}>On The Air</h2>
                        <CircleArrowUpIcon strokeWidth={2} className={styles.icon}/>
                    </span>
                    <div className={styles.subSectionWrapper}>
                        <Slider type={'tv'} data={onTheAir_data} imageType={'backdrop'} slidesPerView={1}/>
                    </div>                    
                </section>

                {/* Popular */}
                <section className={styles.section}>
                    <span>
                        <h2 className={styles.h2Title}>Popular</h2>
                        <StarIcon strokeWidth={2} className={styles.icon}/>
                    </span>
                    <div className={styles.subSectionWrapper}>
                        <Slider type={'tv'} data={popular_data} imageType={'backdrop'} slidesPerView={1}/>
                    </div>                    
                </section>

                {/* Top rated */}
                <section className={styles.section}>
                    <span>
                        <h2 className={styles.h2Title}>Top rated</h2>
                        <AlarmIcon strokeWidth={2} className={styles.icon}/>
                    </span>
                    <div className={styles.subSectionWrapper}>
                        <Slider type={'tv'} data={topRated_data} imageType={'backdrop'} slidesPerView={1}/>
                    </div>                    
                </section>
            </div>
        </Layout> 
    );
}

export default Tv;