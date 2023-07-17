//https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10749
import { useState, useEffect} from "react";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN_API}`
    }
};

type Props = [
    status: Status,
    data: DiscoverMovies[],
]

export const useDiscover = (type:string, gnre:string): Props => {
    const [status, setStatus] = useState<Status>('idle')
    const [data, setData] = useState<DiscoverMovies[]>([])

    const fetchData = async () => {
        try {
            setStatus('loading')
            const response = await 
            fetch(`https://api.themoviedb.org/3/discover/${type}?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${gnre}`, options)
            if (response.ok) {
                setStatus('success')
                const data = await response.json()
                const filterData = (data.results).filter((i:DiscoverMovies) => i.backdrop_path !== undefined && i.backdrop_path !== null )
                setData(filterData)
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
    }, [type])

    return [status, data]
}
