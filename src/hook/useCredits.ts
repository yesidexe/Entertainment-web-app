import { useState, useEffect} from "react";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN_API}`
    }
};

type Credits = [
    status: Status,
    data: CastCredits[],
]

export const useCredits = (type:string, id: string): Credits => {
    const [status, setStatus] = useState<Status>('idle')
    const [data, setData] = useState<CastCredits[]>([])

    const fetchData = async () => {
        try {
            setStatus('loading')
            const response = await 
            fetch(`https://api.themoviedb.org/3/${type}/${id}/credits?language=en-US`, options)
            if (response.ok) {
                setStatus('success')
                const data = await response.json()                
                setData(data.cast)
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
