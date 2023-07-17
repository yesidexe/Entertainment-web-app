import { useState, useEffect} from "react";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${VITE_TOKEN_API}}`
        //Authorization: `Bearer ${import.meta.env.VITE_TOKEN_API}`
    }
};

type MovieLists = [
    status: Status,
    data: Genres[],
]

export const useCategories = (type:string): MovieLists => {
    const [status, setStatus] = useState<Status>('idle')
    const [data, setData] = useState<Genres[]>([])

    const fetchData = async () => {
        try {
            setStatus('loading')
            const response = await 
            fetch(`https://api.themoviedb.org/3/genre/${type}/list?language=en`, options)
            if (response.ok) {
                setStatus('success')
                const data = await response.json()
                setData(data.genres)
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
