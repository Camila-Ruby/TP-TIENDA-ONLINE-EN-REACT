import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useContext, useState, useEffect } from 'react'
import { CarritoContext } from '../context/CarritoContext'
import FormularioCompra from '../components/FormularioCompra'

function Carrito() {
    const { carrito, cambiarCantidad } = useContext(CarritoContext)

    const [mostrarFormulario, setMostrarFormulario] = useState(false)

    const total = carrito.reduce(
        (acumulador, producto) =>
            acumulador + producto.precio * producto.cantidad,
        0
    )

    // Ocultamos el formulario si el carrito queda vacío
    useEffect(() => {
        if (carrito.length === 0) {
            setMostrarFormulario(false)
        }
    }, [carrito])

    return (
        <Container className="my-4">
            <h2 className="text-center mb-4">Mi carrito</h2>

            {carrito.length === 0 ? (
                <p className="text-center">
                    Todavía no agregaste productos a tu carrito.
                </p>
            ) : (
                <>
                    {carrito.map((producto) => (
                        <Card key={producto.id} className="item-carrito mb-3">
                            <Row className="align-items-center g-3">
                                <Col xs={4} md={2}>
                                    <Card.Img
                                        src={producto.imagen}
                                        alt={producto.nombre}
                                        className="imagen-carrito"
                                    />
                                </Col>

                                <Col xs={8} md={10}>
                                    <Card.Body>
                                        <h5>{producto.nombre}</h5>

                                        <p>
                                            Precio por unidad: ${producto.precio}
                                        </p>

                                        <div className="d-flex align-items-center gap-3">
                                            <Button
                                                variant="outline-secondary"
                                                onClick={() =>
                                                    cambiarCantidad(
                                                        producto,
                                                        producto.cantidad - 1
                                                    )
                                                }
                                            >
                                                −
                                            </Button>

                                            <span>{producto.cantidad}</span>

                                            <Button
                                                variant="outline-secondary"
                                                onClick={() =>
                                                    cambiarCantidad(
                                                        producto,
                                                        producto.cantidad + 1
                                                    )
                                                }
                                                disabled={
                                                    producto.cantidad >= producto.stock
                                                }
                                            >
                                                +
                                            </Button>
                                        </div>

                                        <p className="mt-3 fw-bold">
                                            Subtotal: ${producto.precio * producto.cantidad}
                                        </p>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    ))}

                    <div className="total-carrito text-end mt-4">
                        <h4>Total: ${total}</h4>
                    </div>

                    <div className="text-center my-4">
                        {!mostrarFormulario ? (
                            <Button
                                className="boton-agregar"
                                onClick={() => setMostrarFormulario(true)}
                            >
                                Continuar compra
                            </Button>
                        ) : (
                            <FormularioCompra />
                        )}
                    </div>
                </>
            )}
        </Container>
    )
}

export default Carrito
