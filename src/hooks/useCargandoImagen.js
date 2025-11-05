import { useState} from "react"

export function CargandoImagen(){
    const [cargando, setCargando] = useState(true) 

    return {cargando, setCargando}
}