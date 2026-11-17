import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'
import LibroCard from '../components/LibroCard'
import productos from '../data/productos'

function Catalogo() {
    const [busqueda, setBusqueda] = useState('')
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('')
    const [precioMaximo, setPrecioMaximo] = useState('')
    const [ordenPrecio, setOrdenPrecio] = useState('')

    // Buscar por nombre o autor y filtrar por categoría y precio máximo
    const productosFiltrados = productos.filter(producto => {
        const coincideBusqueda =
            producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
            producto.autor.toLowerCase().includes(busqueda.toLowerCase())

        const coincideCategoria =
            categoriaSeleccionada === '' ||
            producto.categoria === categoriaSeleccionada

        const coincidePrecio =
            precioMaximo === '' ||
            producto.precio <= Number(precioMaximo)

        return coincideBusqueda && coincideCategoria && coincidePrecio
    })

    // Ordenar los productos por precio
    const productosOrdenados = [...productosFiltrados].sort((a, b) => {
        if (ordenPrecio === 'menor') {
            return a.precio - b.precio
        }

        if (ordenPrecio === 'mayor') {
            return b.precio - a.precio
        }

        return 0
    })

    // Obtener las categorías sin repetirlas
    const categorias = [
        ...new Set(productos.map(producto => producto.categoria))
    ]

    return (
        <div className="filtros-catalogo">
            <h2 className="text-center mb-4">Nuestro catálogo</h2>

            <Row className="g-3 mb-4">
                <Col xs={12} md={6}>
                    <label className="form-label">
                        Buscar
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Buscar por nombre o autor..."
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                </Col>

                <Col xs={12} md={6}>
                    <label className="form-label">
                        Categorías
                    </label>
                    <select
                        className="form-select"
                        value={categoriaSeleccionada}
                        onChange={(e) => setCategoriaSeleccionada(e.target.value)}
                    >
                        <option value="">Todas las categorías</option>

                        {categorias.map(categoria => (
                            <option key={categoria} value={categoria}>
                                {categoria}
                            </option>
                        ))}
                    </select>
                </Col>

                <Col xs={12} md={6}>
                    <label className="form-label">
                        Precio máximo
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Ingresá un precio máximo"
                        value={precioMaximo}
                        onChange={(e) => setPrecioMaximo(e.target.value)}
                    />
                </Col>

                <Col xs={12} md={6}>
                    <label className="form-label">
                        Ordenar por precio
                    </label>
                    <select
                        className="form-select"
                        value={ordenPrecio}
                        onChange={(e) => setOrdenPrecio(e.target.value)}
                    >
                        <option value="">-</option>
                        <option value="menor">De menor a mayor</option>
                        <option value="mayor">De mayor a menor</option>
                    </select>
                </Col>
            </Row>

            <Row className="g-4">
                {productosOrdenados.length > 0 ? (
                    productosOrdenados.map(producto => (
                        <Col key={producto.id} xs={12} md={6} lg={4}>
                            <LibroCard producto={producto} />
                        </Col>
                    ))
                ) : (
                    <p className="sin-resultados">
                        No encontramos libros con esos criterios.
                    </p>
                )}
            </Row>
        </div>
    )
}

export default Catalogo
