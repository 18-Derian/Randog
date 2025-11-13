import { useEffect, useState } from "react";
import { useRandog } from "../services/useRandog";

export function MostrarImagenModal (){
    const [url, setUrl] = useState()

    const cargarImagen = () => {
        setUrl(null)

        useRandog().then((newUrl) => {
            setUrl(newUrl)
        })
    }

    useEffect(cargarImagen, [])

    return{url, cargarImagen}
}