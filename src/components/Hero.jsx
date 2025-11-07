import { Modal } from "./Modal"
import { useState } from "react"
import { usePerro } from "../context/CargaImagenContext"
import { MostrarDescripcion } from "../hooks/mostrarDescipcion";
import './Hero.css'
import { PERROS_PC } from "../constants/imagenes";

export function Hero(){
    const {cargarImagen, imagenModal} = usePerro()
    const {cargando, setCargando} = imagenModal
    const [modalAbierto, setModalAbierto] = useState(false)
    const {descripcion, cargarDescripcion} = MostrarDescripcion()

    const handleClick = () => {
        setCargando(true)
        setModalAbierto(true) // abre el modal
        cargarImagen()
        cargarDescripcion()
    }

    const cerrarModal = () => {
        setModalAbierto(false);
    };

    return(
        <header className="hero">
                <div className="hero__header">
                    <div>
                        <h1 className="luckiest-guy-regular">¡Descubre que perro eres!</h1>
                        <span>Solo con un clic.</span>
                    </div>
                    <button className="boton boton--principal" onClick={handleClick}> Mostrar modal </button>
                    <div className="borde-circulo">
                        <div className="circulo-lleno"></div>
                    </div>
                    <div className="hero__banner">
                        {Object.entries(PERROS_PC).map(([nombre, url]) => (
                            <img key={nombre} src={url} alt="Perro coqueto" />
                        ))}
                    </div>
                </div>
            
            {modalAbierto && ( <Modal cerrarModal={cerrarModal} descripcion={descripcion}/> )}
        </header>
        
    )
}