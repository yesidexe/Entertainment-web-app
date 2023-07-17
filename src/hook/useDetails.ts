import { useState, useEffect} from "react";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN_API}`
    }
};

type Details = [
    status: Status,
    data: DetailsType | null,
]

/*const details_iniciales ={
    adult: false,
    backdrop_path: '',
    belongs_to_collection: {},
    budget: 123,
    genres: [],
    homepage: '',
    id: 123,
    imdb_id: '',
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 123,
    poster_path: '',
    production_companies: [],
    production_countries: [],
    release_date: '',
    revenue: 123,
    runtime: 123,
    spoken_languages: [],
    status: '',
    tagline: '',
    title: '',
    video: false,
    vote_average: 123,
    vote_count: 123,
    created_by: [],
    episode_run_time: Array,
    first_air_date: '',
    in_production: false,
    languages: [],
    last_air_date: '',
    last_episode_to_air: {},
    name: '',
    next_episode_to_air: {},
    networks: {},
    number_of_episodes: 123,
    number_of_seasons: 123,
    origin_country: [],
    original_name: '',
    seasons: [],
    type: '',
}*/

export const useDetails = (type:string, id: string): Details => {
    const [status, setStatus] = useState<Status>('idle')
    const [data, setData] = useState<DetailsType | null>(null)

    const fetchData = async () => {
        try {
            setStatus('loading')
            const response = await 
            fetch(`https://api.themoviedb.org/3/${type}/${id}?language=en-US`, options)
            if (response.ok) {
                setStatus('success')
                const data = await response.json()                
                setData(data)
            } else {
                setStatus('error')
                console.error("Algo salió mal")
            }
        } catch (error) {
            console.error('Error: ', error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [type,id])

    return [status, data]
}
