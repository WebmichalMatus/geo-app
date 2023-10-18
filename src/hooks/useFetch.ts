import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

interface FetchResult<T> {
    data: T | null;
    loading: boolean;
    error: any | null;
}

async function fetchData<T>(url: string): Promise<T> {
    try {
        const response: AxiosResponse<T> = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
}

function useFetch<T>(url: string): FetchResult<T> {

    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any | null>(null);

    useEffect(() => {

        const fetchDataAsync = async () => {
            try {
                setLoading(true);
                const result = await fetchData<T>(url);
                setData(result);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchDataAsync();
    }, [url]);

    return { data, loading, error };
}

export default useFetch;