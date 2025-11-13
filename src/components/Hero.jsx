import { Modal } from "./Modal"
import { useState } from "react"
import './Hero.css'
import { PERROS_PC, PERROS_MV } from "../constants/imagenes";
import { MostrarImagenModal } from "../hooks/useMostrarImagenModal";
import { CargandoImagen } from "../hooks/useCargandoImagen";
import { useDescripcionRandog } from "../services/useDescripcionRandog";

export function Hero(){
    const {cargando, setCargando} = CargandoImagen()
    const {url, cargarImagen} = MostrarImagenModal()
    const [modalAbierto, setModalAbierto] = useState(false)
    const {descripcion, nuevaDescripcion} = useDescripcionRandog()

    const handleClick = () => {
        setModalAbierto(true) // abre el modal
        setCargando(true)
        cargarImagen()
        nuevaDescripcion()
    }

    const cerrarModal = () => {
        setModalAbierto(false);
    };

    return(
        <header className="hero">
                <div className="hero__header container">
                    <div className="texto-centro">
                        <h1>¡Descubre que perro eres!</h1>
                        <span>Solo con un clic.</span>
                    </div>
                    <button className="boton boton--principal" onClick={handleClick}> Mostrar modal </button>
                    <div className="borde-circulo">
                        <div className="circulo-lleno"></div>
                    </div>
                </div>
                <div className="hero__banner hero__banner--movil">
                    {Object.entries(PERROS_MV).map(([nombre, url]) => (
                        <img key={nombre}
                        src={url}
                        alt="Perro coqueto" 
                        className={`hero__imagen ${nombre}`}
                        />
                    ))}
                </div>
                <div className="hero__banner hero__banner--pc">
                    {Object.entries(PERROS_PC).map(([nombre, url]) => (
                        <img key={nombre}
                        src={url}alt="Perro coqueto"
                        className={`hero__imagen ${nombre}`}
                         />
                    ))}
                </div>
            {modalAbierto && ( <Modal cerrarModal={cerrarModal} descripcion={descripcion} cargando = {cargando} setCargando={setCargando} url={url}/> )}
        </header>
    )
}