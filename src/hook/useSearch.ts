import { useState, useEffect,useContext } from "react";
import { AppContext } from "../context";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN_API}`
    }
};

type Results = [
    status: Status,
    data: SearchResults[],
]

export const useSearch = (query: string): Results => {
    const { searchBy } = useContext(AppContext)
    const [status, setStatus] = useState<Status>('idle')
    const [data, setData] = useState<SearchResults[]>([])

    const fetchData = async () => {
        try {
            setStatus('loading')
            const response = await

                fetch(`https://api.themoviedb.org/3/search/${searchBy}?query=${query}&include_adult=false&language=en-US&page=1`, options)
            if (response.ok) {
                setStatus('success')
                const data = await response.json()
                const filterData = data.results.filter((result: SearchResults) => {
                    return result.backdrop_path !== undefined && result.backdrop_path !== null
                })
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
    }, [query])

    return [status, data]
}
