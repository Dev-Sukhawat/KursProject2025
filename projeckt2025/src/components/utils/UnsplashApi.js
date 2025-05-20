import { useEffect, useState } from "react";
import axios from "axios";

function useUnsplashApi(term = "", order = "relevant") {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiKey = "Mkk4gboxBbqf8zQrKPpcKmqwAebsgr9i2opNNycAHb4"; // ersätt med din riktiga Unsplash Access Key

    useEffect(() => {
        const fetchUnsplash = async () => {
            setLoading(true);
            setError(null);

            const cleanedTerm = term
                .split(/[,&]/)
                .map((t) => t.trim().toLowerCase())
                .filter((t) => t.length > 0)
                .join(" ");

            let url = `https://api.unsplash.com/search/photos?client_id=${apiKey}&per_page=30`;
            if (cleanedTerm) url += `&query=${encodeURIComponent(cleanedTerm)}`;
            if (order) url += `&order_by=${order}`;

            try {
                const response = await axios.get(url);
                console.log(response.data.results);
                setData(response.data.results);
            } catch (err) {
                setError(err.response?.data?.errors?.[0] || "Något gick fel");
            } finally {
                setLoading(false);
            }
        };

        if (term) {
            fetchUnsplash();
        }
    }, [term, order]);

    return { data, loading, error };
}

export default useUnsplashApi;