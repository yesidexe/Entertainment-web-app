import { Link, useNavigate } from 'react-router-dom';
import { imagePath } from '../../utils';
import { HeartIcon, MovieIcon, DeviceTvIcon } from '../Icons';
import styles from './trendingSliderCards.module.css'
import { MouseEvent } from 'react';

type TypeSliderCards = {
    type: string,
    data: ResultsLists | TrendingType,
    imageType: string,
}

function SliderCards({ type,data,imageType }:TypeSliderCards) {
    const navigate = useNavigate()

    const handleClick = (e:MouseEvent<HTMLSpanElement>)=>{
        e.preventDefault();
        navigate("/favorites")
    }

    return (
        <Link to={`/${type}/${data.id}`} className={`keen-slider__slide ${styles.slide}`}>
            <figure>
                <img alt={data.title} width={'100%'} height={'100%'} src={imageType==='poster'?imagePath(data.poster_path):imagePath(data.backdrop_path)} />
            </figure>
            <span onClick={(e) => handleClick(e)} className={styles.favWrapper}>
                <HeartIcon strokeWidth={2} className={styles.favIcon} />
            </span>
            <div className={styles.cardDetails}>
                <span>
                    {
                        type === 'movie'
                        ? <MovieIcon strokeWidth={1.5} className={styles.icons} />
                        : <DeviceTvIcon strokeWidth={1.5} className={styles.icons} />
                    }                    
                    <p>{type}</p>
                </span>
                <p className={styles.cardTitle}>
                    {data.title ? data.title : data.name}
                </p>
            </div>
        </Link>
    );
}

export default SliderCards;