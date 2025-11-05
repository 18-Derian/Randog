import { usePerro } from "../context/CargaImagenContext";
import { ImgUrl } from "./ImgUrl";

export function Galeria() {
    const {urls, cargarImagenes, imagenGaleria} = usePerro()
    const {cargando, setCargando} = imagenGaleria

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
            <div>
                {urls.length > 0 ? (
                        urls.map((url, i) => (
                            <ImgUrl key={i} url={url} cargando={cargando} setCargando={setCargando}></ImgUrl>
                        ))
                    ) : (
                        <p>Cargando perritos</p>
                    )
                }
            </div>
        </section>
    )
}