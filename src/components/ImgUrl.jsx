import { useEffect, useState } from "react"
import { Cargando } from "./Cargando"

export function ImgUrl ({url, cargando, setCargando}){

    const [imagenActual, setImagenActual] = useState(false)

    useEffect(() => {
        setImagenActual(false)
        setCargando(true)
        setImagenActual(true)
    }, [url])

    return(
        <div>
            {cargando && <Cargando/>}
            
            {
                imagenActual &&
                
            <img
                style={{display: cargando ? "none" : "block"}}
                src={url}
                alt={"Perro random de la API"}
                onLoad={() => setCargando(false)}//cuando se carga, se oculta el componente Cargando
            />
            }
        </div>
    )
}