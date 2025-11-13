import { useEffect, useState } from "react";
import { useRandog } from "../services/useRandog";

export function MostrarGaleria() {
    const [urls, setUrls] = useState([])

    const cargarImagenes = async () => {
        const cantidad = 9;

        const promesas = Array.from({ length: cantidad }, () => useRandog());
        const nuevasUrls = await Promise.all(promesas);

        setUrls(nuevasUrls);
    };

    useEffect(() => {
        cargarImagenes();
    }, []);

    return {urls, cargarImagenes}
}