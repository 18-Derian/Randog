import { useEffect, useState } from "react";
import { useRandog } from "../services/useRandog";

export function MostrarImagen (){
    const [url, setUrl] = useState()

    const cargarImagen = () => {
        useRandog().then((newUrl) => {
            setUrl(newUrl)
        })
    }

    useEffect(cargarImagen, [])

    return{url, cargarImagen}
}