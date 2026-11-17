import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom'
import productos from '../data/productos'
import BotonAgregarCarrito from '../components/BotonAgregarCarrito'

function DetalleLibro() {
    const { id } = useParams()
    const producto = productos.find(
        (producto) => producto.id === Number(id)
    )
    if (!producto) {
    return (
        <Container className="my-4">
            <h2>Libro no encontrado</h2>
            <p>El libro que estás buscando no existe.</p>
        </Container>
    )
    }
    
    return (
        <Container className="my-4">
            <h2 className="text-center mb-4">{producto.nombre}</h2>

            <img
                src={producto.imagen}
                alt={`Portada de ${producto.nombre}`}
                className="portada-detalle"
            />

            <h4>{producto.autor}</h4>
            <p><strong>Categoría:</strong> {producto.categoria}</p>
            <p><strong>Precio:</strong> ${producto.precio}</p>
            <p><strong>Descripción:</strong> {producto.descripcion}</p>
            <p><strong>Stock:</strong> {producto.stock > 0 ? 'Disponible' : 'Sin stock'}</p>
            <BotonAgregarCarrito producto={producto} />
        </Container>
    )

}

export default DetalleLibro
