import { Swiper, SwiperSlide} from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import 'swiper/css';
import "swiper/css/free-mode";
import { FreeMode } from '../../../node_modules/swiper';
import SliderCards from '../SliderCards';
import styles from './Slider.module.css'

type SliderProps = {
    type: string,
    data: TrendingType[] | ResultsLists[],
    imageType: string,
}
type Props = SliderProps & SwiperOptions;


function Slider({ type, data, imageType, ...swiperProps } : Props) {

    return (
        <div>
            <Swiper                
                modules={[FreeMode]}
                loop={true}
                spaceBetween={30}                
                freeMode={true}
                {...swiperProps}
                className={styles.swiper}>
                {
                    data.slice(0, 10).map((dat) => {
                        return (
                            <SwiperSlide key={dat.id}>
                                <SliderCards type={type} data={dat} imageType={imageType} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}

export default Slider;
