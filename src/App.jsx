import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CarritoProvider } from './context/CarritoContext'
import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'
import Catalogo from './pages/Catalogo'
import Carrito from './pages/Carrito'
import DetalleLibro from './pages/DetalleLibro'

function App() {
    return (
        <CarritoProvider>
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/catalogo" element={<Catalogo />} />
                    <Route path="/carrito" element={<Carrito />} />
                    <Route path="/libro/:id" element={<DetalleLibro />} />
                </Routes>
            </BrowserRouter>
        </CarritoProvider>
    )
}

export default App
