import { CircleArrowUpIcon, FlameIcon, StarIcon } from "../../components/Icons";
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
                <section className={styles.section}>
                    <span>
                        <h2 className={styles.h2Title}>Trending Movies</h2>
                        <FlameIcon strokeWidth={2} className={styles.icon} />
                    </span>
                    <div className={styles.trendingWrapper}>
                        <Slider type={'movie'} data={trendingMovie_data} imageType={'poster'} slidesPerView={4.5} />
                    </div>
                </section>

                {/* Top rated movies */}
                <section className={styles.section}>
                    <span>
                        <h2 className={styles.h2Title}>Top Rated Movies</h2>
                        <StarIcon strokeWidth={2} className={styles.icon} />
                    </span>
                    <CardsContainer type={'movie'} lists="top_rated" />
                </section>

                {/* Trending TvShows  */}
                <section className={styles.section}>
                    <span>
                        <h2 className={styles.h2Title}>Trending Tv Shows</h2>
                        <FlameIcon strokeWidth={2} className={styles.icon} />
                    </span>
                    <div className={styles.trendingWrapper}>
                        <Slider type={'tv'} data={trendingTv_data} imageType={'poster'} slidesPerView={4.5} />
                    </div>
                </section>

                {/* Top rated tv shows */}
                <section className={styles.section}>
                    <span>
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