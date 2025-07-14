import { useEffect, useState } from "react";
import axios from "axios";
const apiKey = "Mkk4gboxBbqf8zQrKPpcKmqwAebsgr9i2opNNycAHb4";

function useUnsplashApi(term = "", order = "relevant", searchId = "") {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // ersätt med din riktiga Unsplash Access Key

    useEffect(() => {
        const fetchUnsplash = async () => {
            setLoading(true);
            setError(null);

            try {
                let response;

                if (searchId) {
                    // Hämta en enskild bild via ID
                    response = await axios.get(
                        `https://api.unsplash.com/photos/${searchId}?client_id=${apiKey}`
                    );
                    setData(response.data); // en bild (objekt)
                } else if (term.trim() !== "") {
                    // Sök efter bilder med sökterm och order
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

                    setData(response.data.results); // lista av bilder
                } else {
                    // Inget sökord, hämta senaste bilder med order (t.ex. latest)
                    response = await axios.get(
                        `https://api.unsplash.com/photos?client_id=${apiKey}&order_by=${order}&per_page=30`
                    );
                    setData(response.data); // lista av bilder
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

export async function fetchUnsplashImagesByIds(ids = []) {
    const results = await Promise.all(
        ids.map(async (id) => {
            try {
                const res = await axios.get(
                    `https://api.unsplash.com/photos/${id}?client_id=${apiKey}`
                );
                return { id, data: res.data };
            } catch (err) {
                console.error(`Misslyckades att hämta bild med ID ${id}`, err);
                return null;
            }
        })
    );

    return results.filter(Boolean); // Ta bort ev. null från misslyckade fetches
}

export default useUnsplashApi;