import { CargandoImagen } from "../hooks/useCargandoImagen";
import { MostrarGaleria } from "../hooks/useMostrarGaleria";
import { Cargando } from "./Cargando";

import "./Galeria.css"

export function Galeria() {
    const {urls, cargarImagenes} = MostrarGaleria()
    const {cargando, setCargando} = CargandoImagen()

    const handleClick = () => {
        setCargando(true)
        cargarImagenes()
    }
 
    return(
        <section className="container texto-centro galeria">
            <h2>
                Galería de perritos
            </h2>
            <p>
                Existen cientos de razas en el mundo, pero ningún perro se compara al tuyo, 
                porque su amor, su mirada y su lealtad son únicos. No importa el tamaño, 
                el color o el origen, lo que lo hace especial es todo lo que significa para ti.
            </p>
           <button className="boton boton--principal" onClick={handleClick}>Cambiar Galería</button> 
            
            <div className="galeria__contenedor">
                <div className="galeria__contenedor--scroll">
                    {urls.length > 0 ? (
                        urls.map((url, i) => (
                            <div className="galeria__contenedor-imagen" key={i}>
                                {cargando && <Cargando/>}
                                <img
                                    className= {`modal__imagen ${cargando  ? "oculto" : "visible"}`}
                                    src={url}                                
                                    alt={"Perro random de la API"}
                                    onLoad={() => setCargando(false)}//cuando se carga, se oculta el componente Cargando
                                />
                            </div>
                        ))
                    ) : (
                            <p>Cargando perritos</p>
                        )
                    }
                </div>
            </div>
        </section>
    )
}