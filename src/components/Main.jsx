import { CargandoImagen } from "../hooks/useCargandoImagen";
import { MostrarImagen } from "../hooks/mostrarImagen";
import { useDescripcionRandog } from "../services/useDescripcionRandog";
import { Cargando } from "./Cargando";

export function Main(){
    const {url, cargarImagen} = MostrarImagen()
    const {cargando, setCargando} = CargandoImagen()
    const {descripcion, nuevaDescripcion} = useDescripcionRandog()

    const handleClick = () => {
        setCargando(true)
        cargarImagen()
        nuevaDescripcion()
    }
    return(
        <main>
            <div>

            </div>
            <div>
                <h2>¡Que perro eres?</h2>
                {cargando && <Cargando/> }
                    <img
                        className= {`modal__imagen ${cargando  ? "oculto" : "visible"}`}
                        src={url}
                        alt={"Perro random de la API"}
                        onLoad={() => setCargando(false)}//cuando se carga, se oculta el componente Cargando
                    />
                <p>{descripcion}</p>
                <button onClick={handleClick}>Cambiar de perrito</button>
            </div>
        </main>
    )
}