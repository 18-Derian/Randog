import { Modal } from "./Modal"
import { useState } from "react"
import { usePerro } from "../context/CargaImagenContext"
import { MostrarDescripcion } from "../hooks/mostrarDescipcion";

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
        <header>
            <h1>¡Descubre que perro eres!</h1>
            <p>Solo con un clic.</p>
            <button onClick={handleClick}> Mostrar modal </button>
            
            {/* Mostrar el modal solo si está abierto */}
            {modalAbierto && ( <Modal cerrarModal={cerrarModal} descripcion={descripcion}/> )}
            
        </header>
    )
}