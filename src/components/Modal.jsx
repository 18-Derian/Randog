import { Cargando } from "./Cargando";
import './Modal.css'

export function Modal({url, cerrarModal, descripcion, cargando, setCargando}) {

  console.log(cargando)
  console.log(url)
  return (
    <div className="modal">
      <div className="modal__contenedor">
        {cargando && <Cargando/> }
        <img
          className= {`modal__imagen ${cargando  ? "oculto" : "visible"}`}
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