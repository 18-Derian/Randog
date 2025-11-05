import { useEffect, useState } from "react";
import { useDescripcionRandog } from "../services/useDescripcionRandog";

export function MostrarDescripcion (){
    const [descripcion, setDescripcion] = useState()

    const cargarDescripcion = () => {
        setDescripcion(useDescripcionRandog)
    }

    useEffect(cargarDescripcion, [])
    console.log(descripcion)
    return{descripcion, cargarDescripcion}
}