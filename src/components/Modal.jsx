import { ImgUrl } from "./ImgUrl";
import { usePerro } from "../context/CargaImagenContext";

export function Modal({cerrarModal, descripcion}) {

  const {url, imagenModal} = usePerro()
  const {cargando, setCargando} = imagenModal
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        color: "black"
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          textAlign: "center"
        }}
      >
        <button onClick={cerrarModal}>Cerrar</button>
        <p>{descripcion}</p>
        <ImgUrl url = {url} cargando={cargando} setCargando={setCargando}></ImgUrl>
      </div>
    </div>
  );
}