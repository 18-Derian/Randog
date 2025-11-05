import { createContext, useContext } from "react"
import { MostrarImagen } from "../hooks/mostrarImagen";
import { CargandoImagen } from "../hooks/useCargandoImagen";
import { MostrarGaleria } from "../hooks/useMostrarGaleria";

const PerroContext = createContext()

export function PerroProvider({children}){
    const {url, cargarImagen} = MostrarImagen()
    const {urls, cargarImagenes} = MostrarGaleria()
    const imagenModal = CargandoImagen()
    const imagenGaleria = CargandoImagen()
    const imagenMain = CargandoImagen()

    return (
        <PerroContext.Provider value={{url, urls, cargarImagenes, cargarImagen, imagenGaleria, imagenMain, imagenModal}}>
            {children}
        </PerroContext.Provider>
    )
}

export function usePerro(){
    return useContext(PerroContext)
}