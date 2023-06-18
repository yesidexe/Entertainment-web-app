import SearchBar from "../SearchBar/SearchBar";
import CardsWrapper from '../CardsWrapper/CardsWrapper'
import TrendingSlider from '../TrendingSlider'
import styles from './Body.module.css'
import { FlameIcon } from "../Icons/Icons";

function Body() {
    return (
        <div className={styles.bodyWrapper}>
            {/*el searchbar deberia de ir en un layout, creo*/}
            <SearchBar />
            <section className={styles.section}>
                <span>
                    <h2 className={styles.h2Title}>Trending</h2>
                    <FlameIcon strokeWidth={2} className={styles.icon} />
                </span>
                <div className={styles.trendingWrapper}>
                    <TrendingSlider />
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.h2Title}>Recommended for you</h2>
                <CardsWrapper />
            </section>
        </div>
    );
}

export default Body;