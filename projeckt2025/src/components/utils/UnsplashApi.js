import { useEffect, useState } from "react";
import axios from "axios";

function useUnsplashApi(term = "", order = "relevant", searchId = "") {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiKey = "Mkk4gboxBbqf8zQrKPpcKmqwAebsgr9i2opNNycAHb4"; // ersätt med din riktiga Unsplash Access Key

    useEffect(() => {
        const fetchUnsplash = async () => {
            setLoading(true);
            setError(null);

            try {
                let response;

                if (searchId) {
                    console.log("fetching imgage with id");

                    // Hämta en specifik bild med ID
                    response = await axios.get(
                        `https://api.unsplash.com/photos/${searchId}?client_id=${apiKey}`
                    );
                    setData(response.data); // Enskild bild
                } else if (term) {
            // Sök efter bilder med term
                    const cleanedTerm = term
                        .split(/[,&]/)
                        .map((t) => t.trim().toLowerCase())
                        .filter((t) => t.length > 0)
                        .join(" ");

                    response = await axios.get(
                        `https://api.unsplash.com/search/photos?client_id=${apiKey}&query=${encodeURIComponent(
                            cleanedTerm
                        )}&order_by=${order}&per_page=30`
                    );
                    // console.log(response.data.results);

                    setData(response.data.results); // Lista av bilder
                } else {
                    setData(null);
                }
            } catch (err) {
                setError(err.response?.data?.errors?.[0] || "Något gick fel");
            } finally {
                setLoading(false);
            }
        };

        if (term) {
            fetchUnsplash();
        }
    }, [term, order, searchId]);

    return { data, loading, error };
}

export default useUnsplashApi;