import { ImgUrl } from "./ImgUrl";
import { usePerro } from "../context/CargaImagenContext";
import { MostrarDescripcion } from "../hooks/mostrarDescipcion";

export function Main(){
    const {url, cargarImagen, imagenMain} = usePerro()
    const {cargando, setCargando} = imagenMain
    const {descripcion, cargarDescripcion} = MostrarDescripcion()

    const handleClick = () => {
        setCargando(true)
        cargarImagen()
        cargarDescripcion()
    }
    return(
        <main>
            <div>

            </div>
            <div>
                <h2>¡Que perro eres?</h2>
                <ImgUrl url={url} cargando={cargando} setCargando={setCargando}></ImgUrl>
                <p>{descripcion}</p>
                <button onClick={handleClick}>Cambiar de perrito</button>
            </div>
        </main>
    )
}