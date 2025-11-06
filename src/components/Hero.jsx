import { Modal } from "./Modal"
import { useState } from "react"
import { usePerro } from "../context/CargaImagenContext"
import { MostrarDescripcion } from "../hooks/mostrarDescipcion";
import './Hero.css'

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
                        <h1 class="luckiest-guy-regular">¡Descubre que perro eres!</h1>
                        <span>Solo con un clic.</span>
                    </div>
                    <button className="boton boton--principal" onClick={handleClick}> Mostrar modal </button>
                    <div class="borde-circulo">
                        <div class="circulo-lleno"></div>
                    </div>
                </div>
            
            {/* Mostrar el modal solo si está abierto */}
            {modalAbierto && ( <Modal cerrarModal={cerrarModal} descripcion={descripcion}/> )}
        </header>
        
    )
}