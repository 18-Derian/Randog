import './App.css'
import {Hero} from './components/Hero'
import { Main } from './components/Main'
import { Galeria } from './components/Galeria'
import { Cargando } from './components/Cargando'
import { PerroProvider } from './context/CargaImagenContext'




function App() {

  return (
    <>
    <PerroProvider>
      <Hero></Hero>
      <Main></Main>
      <Galeria></Galeria>
    </PerroProvider>
    </>
  )
}

export default App
