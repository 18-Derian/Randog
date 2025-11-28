import { Cargando } from "./Cargando";
import './Modal.css'

export function Modal({url, cerrarModal, descripcion, cargando, setCargando}) {

  return (
    <div className="modal">
      <div className="modal__contenedor caja-blanca">
        {cargando && <Cargando/> }
        <img
          className= {`imagen imagen--modal ${cargando  ? "oculto" : "visible"}`}
          src={url}
          alt={"Perro random de la API"}
          onLoad={() => setCargando(false)}//cuando se carga, se oculta el componente Cargando
        />
        <p>{descripcion}</p>
        <button className="boton boton--principal" onClick={cerrarModal}>Cerrar</button>
      </div>
    </div>
  );
}