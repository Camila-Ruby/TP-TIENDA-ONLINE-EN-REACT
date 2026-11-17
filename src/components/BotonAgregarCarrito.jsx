import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
import { useContext, useState } from 'react'
import { CarritoContext } from '../context/CarritoContext'

function BotonAgregarAlCarrito({ producto }) {
    const { carrito, agregarAlCarrito } = useContext(CarritoContext)

    const [mensajeNotificacion, setMensajeNotificacion] = useState('')
    const [mostrarNotificacion, setMostrarNotificacion] = useState(false)
    const [cantidadSeleccionada, setCantidadSeleccionada] = useState(1)

    const productoEnCarrito = carrito.find(
        (item) => item.id === producto.id
    )

    const cantidadEnCarrito = productoEnCarrito
        ? productoEnCarrito.cantidad
        : 0

    const unidadesDisponibles = producto.stock - cantidadEnCarrito

    const stockAgotado = unidadesDisponibles <= 0

    const aumentarCantidad = () => {
        if (cantidadSeleccionada < unidadesDisponibles) {
            setCantidadSeleccionada(cantidadSeleccionada + 1)
        }
    }

    const disminuirCantidad = () => {
        if (cantidadSeleccionada > 1) {
            setCantidadSeleccionada(cantidadSeleccionada - 1)
        }
    }

    const manejarClick = () => {
        const agregado = agregarAlCarrito(producto, cantidadSeleccionada)

        if (agregado) {
            setMensajeNotificacion(
                `¡Se agregaron ${cantidadSeleccionada} unidades de ${producto.nombre} al carrito!`
            )
            setMostrarNotificacion(true)
            setCantidadSeleccionada(1)
        }
    }

    return (
        <>
            <p className="unidades-disponibles">
                Unidades disponibles: {unidadesDisponibles}
            </p>
            
            <div className="selector-cantidad">
                <Button
                    variant="outline-secondary"
                    className="boton-cantidad"
                    onClick={disminuirCantidad}
                    disabled={cantidadSeleccionada <= 1}
                >
                    −
                </Button>

                <span className="cantidad-seleccionada">
                    {cantidadSeleccionada}
                </span>

                <Button
                    variant="outline-secondary"
                    className="boton-cantidad"
                    onClick={aumentarCantidad}
                    disabled={stockAgotado || cantidadSeleccionada >= unidadesDisponibles}
                >
                    +
                </Button>
            </div>

            <Button
                className="boton-agregar"
                onClick={manejarClick}
                disabled={stockAgotado}
            >
                {stockAgotado ? 'Sin stock' : 'Agregar al carrito'}
            </Button>

            <ToastContainer className="contenedor-notificacion">
                <Toast
                    show={mostrarNotificacion}
                    onClose={() => setMostrarNotificacion(false)}
                    delay={2000}
                    autohide
                >
                    <Toast.Header>
                        <strong className="me-auto">The Book Nook</strong>
                    </Toast.Header>

                    <Toast.Body>
                        {mensajeNotificacion}
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    )
}

export default BotonAgregarAlCarrito

