import { FlameIcon, StarIcon } from "../../components/Icons";
import CardsContainer from '../../components/CardsContainer';
import Slider from '../../components/Slider';
import Layout from "../../components/Layout";

import styles from './Home.module.css'
import { useTrendingFetch } from "../../hook/useTrendingFetch";



function Home() {
    const [trendingMovie_status, trendingMovie_data] = useTrendingFetch('movie') 
    const [trendingTv_status, trendingTv_data] = useTrendingFetch('tv') 

    return (
        <Layout>
            <div className={styles.home}>
                {/*Trending Movies*/}
                <section className={styles.trendingSection}>
                    <span className={styles.sectionTitle}>
                        <h2 className={styles.h2Title}>Trending Movies</h2>
                        <FlameIcon strokeWidth={2} className={styles.icon} />
                    </span>
                    <div className={styles.trendingWrapper}>
                        {
                            trendingMovie_status === 'success' &&
                            <Slider type={'movie'} data={trendingMovie_data} imageType={'poster'} slidesPerView={1}/>
                        }                        
                    </div>
                </section>

                {/* Top rated movies */}
                <section className={styles.ratedSection}>
                    <span className={styles.sectionTitle}>
                        <h2 className={styles.h2Title}>Top Rated Movies</h2>
                        <StarIcon strokeWidth={2} className={styles.icon} />
                    </span>
                    <CardsContainer type={'movie'} lists="top_rated" />
                </section>

                {/* Trending TvShows  */}
                <section className={styles.trendingSection}>
                    <span className={styles.sectionTitle}>
                        <h2 className={styles.h2Title}>Trending Tv Shows</h2>
                        <FlameIcon strokeWidth={2} className={styles.icon} />
                    </span>
                    <div className={styles.trendingWrapper}>
                        {
                            trendingTv_status === 'success' &&
                            <Slider type={'tv'} data={trendingTv_data} imageType={'poster'} slidesPerView={1} />
                        }
                    </div>
                </section>

                {/* Top rated tv shows */}
                <section className={styles.ratedSection}>
                    <span className={styles.sectionTitle}>
                        <h2 className={styles.h2Title}>Top Rated Tv Shows</h2>
                        <StarIcon strokeWidth={2} className={styles.icon} />
                    </span>
                    <CardsContainer type={'tv'} lists="top_rated" />
                </section>
            </div>
        </Layout>
    );

}

export default Home;