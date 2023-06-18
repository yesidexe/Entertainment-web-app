import movies from '../../../with-results.json'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import TrendingSliderCards from '../TrendingSliderCards';

type Data = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

const data: Data[] = movies.Search

function TrendingSlider() {
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free",
        slides: { origin: "center", perView: 2.5, spacing: 20 },
        range: {
            min: -5,
            max: 5,
        },
    })

    return (
        <div ref={sliderRef} className="keen-slider">
            {data.slice(0, 5).map((dat) => {
                return (
                    <TrendingSliderCards data={dat}/>
                )
            })}
        </div>
    );
}

export default TrendingSlider;