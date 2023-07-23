import { useState, useEffect } from "react";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN_API}`
    }
};

type Trending = [
    status: Status,
    data: TrendingType[],
]

export const useTrendingFetch = (type:string):Trending => {
    const [status, setStatus] = useState<Status>('idle')
    const [data, setData] = useState<TrendingType[]>([])

    const fetchData = async () => {
        setStatus('loading')
        try {            
            const response = await            
                fetch(`https://api.themoviedb.org/3/trending/${type}/day?language=en`, options)
            if (response.ok) {                
                const data = await response.json()
                setData(data.results)
                setStatus('success')
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
