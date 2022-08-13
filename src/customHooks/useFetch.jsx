import { useState, useEffect } from 'react';

const URL = `https://fake-products-eric.herokuapp.com/api/products`;

export const useFetch = (endpoint) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            const peticion = endpoint ? `${URL}/${endpoint}` : URL;
            try {
                const info = await fetch(peticion);
                const response = await info.json();
                setData(response);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        getData();
    }, [endpoint]);

    return { data, loading, error };
};
