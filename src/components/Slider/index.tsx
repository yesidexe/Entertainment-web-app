import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import { FreeMode } from '../../../node_modules/swiper';
import SliderCards from '../SliderCards';

import 'swiper/css';
import "swiper/css/free-mode";
import styles from './Slider.module.css'

type SliderProps = {
    type: string,
    data: TrendingType[] | ResultsLists[],
    imageType: string,
}
type Props = SliderProps & SwiperOptions;


function Slider({ type, data, imageType, ...swiperProps }: Props) {

    return (
        <div>
            <Swiper
                modules={[FreeMode]}
                loop={true}
                spaceBetween={10}
                freeMode={true}
                {...swiperProps}
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
                }}                
                className={`mySwiper ${styles.swiper}`}>
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
