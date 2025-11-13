import { CargandoImagen } from "../hooks/useCargandoImagen";
import { MostrarGaleria } from "../hooks/useMostrarGaleria";
import { Cargando } from "./Cargando";

export function Galeria() {
    const {urls, cargarImagenes} = MostrarGaleria()
    const {cargando, setCargando} = CargandoImagen()

    const handleClick = () => {
        setCargando(true)
        cargarImagenes()
    }
 
    return(
        <section>
            <h2>
                Galería de perritos
            </h2>
            <p>
                Existen cientos de razas en el mundo, pero ningún perro se compara al tuyo, 
                porque su amor, su mirada y su lealtad son únicos. No importa el tamaño, 
                el color o el origen, lo que lo hace especial es todo lo que significa para ti.
            </p>
           <button onClick={handleClick}>Cambiar Galería</button> 
            
                {urls.length > 0 ? (
                    urls.map((url, i) => (
                        <div>
                            {cargando && <Cargando/>}
                            <img
                                key={i}
                                className= {`modal__imagen ${cargando  ? "oculto" : "visible"}`}
                                src={url}                                alt={"Perro random de la API"}
                                onLoad={() => setCargando(false)}//cuando se carga, se oculta el componente Cargando
                            />
                        </div>
                    ))
                ) : (
                        <p>Cargando perritos</p>
                    )
                }
        </section>
    )
}