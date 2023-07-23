import { useState, useEffect} from "react";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN_API}`
    }
};

type MovieLists = [
    status: Status,
    data: ResultsLists[],
]

export const useLists = (type:string, lists: string): MovieLists => {
    const [status, setStatus] = useState<Status>('idle')
    const [data, setData] = useState<ResultsLists[]>([])

    const fetchData = async () => {
        setStatus('loading')
        try {            
            const response = await 
            fetch(`https://api.themoviedb.org/3/${type}/${lists}?language=en&page=1`, options)
            if (response.ok) {                
                const data = await response.json()
                const filterData = data.results.filter((result: SearchResults) => {
                    return result.backdrop_path !== undefined && result.backdrop_path !== null
                })
                setData(filterData)
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
    }, [type,lists])

    return [status, data]
}
