import { CargandoImagen } from "../hooks/useCargandoImagen";
import { MostrarImagen } from "../hooks/mostrarImagen";
import { useDescripcionRandog } from "../services/useDescripcionRandog";
import { Cargando } from "./Cargando";
import { PERRO_CHISMOSO, PERRO_FLOJO } from "../constants/imagenes";

import "./Main.css"


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
        <main className="container grid-2 main">
            <div className="main__separador texto-centro">
                <h2>Para tí, ¿que es un perro?</h2>
                <p>
                    Un perro es elaltad hecha vida, un amigo fiel que ama sin condición
                     y alegra cada día co su ternura
                </p>
            </div>
            <div className="caja-blanca caja-blanca--main">
                <h2>¡Que perro eres?</h2>
                {cargando && <Cargando/> }
                    <img
                        className= {`imagen imagen--main ${cargando  ? "oculto" : "visible"}`}
                        src={url}
                        alt={"Perro random de la API"}
                        onLoad={() => setCargando(false)}//cuando se carga, se oculta el componente Cargando
                    />
                <p>{descripcion}</p>
                <button className="boton boton--principal" onClick={handleClick}>Cambiar de perrito</button>
                <img className="caja__perro--izquierda" src={PERRO_CHISMOSO}/>
                <img className="caja__perro--arriba" src={PERRO_FLOJO}/>
            </div>
        </main>
    )
}