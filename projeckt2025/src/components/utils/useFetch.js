import { useState, useEffect } from 'react';

function useFetch(url, fallbackData = null) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        setLoading(true);
        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch');
                return res.json();
            })
            .then((json) => {
                if (isMounted) {
                    setData(json);
                    setLoading(false);
                }
            })
            .catch((err) => {
                if (isMounted) {
                    if (fallbackData) {
                        setData(fallbackData);
                        setError(null); // ignore the error if fallback works
                    } else {
                        setError(err.message);
                    }
                    setLoading(false);
                }
            });

        return () => {
            isMounted = false;
        };
    }, [url, fallbackData]);

    return { data, loading, error };
}

export default useFetch;
